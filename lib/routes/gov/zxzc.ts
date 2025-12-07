import { Route } from '@/types';
import got from '@/utils/got';
import { load } from 'cheerio';
import { parseDate } from '@/utils/parse-date';
import cache from '@/utils/cache';

// 目标页面的固定 URL
const baseUrl = 'https://www.gov.cn/zhengce/zuixin/';

// 定义路由元数据
export const route: Route = {
    // 路由路径：例如 /gov/latest-policy
    path: '/zxzc',
    // 路由名称
    name: '最新政策',
    // 网站 URL
    url: baseUrl,
    // 分类
    categories: ['government'],
    // 示例路径
    example: '/gov/zxzc',
    // 维护者
    maintainers: ['c71an'], 
    // 处理器函数
    handler,
};

async function handler() {
    // 获取列表页数据
    const { data: listHtml } = await got(baseUrl);
    const $ = load(listHtml);
    
    // 文章列表选择器
    const list = $('div.news_box .list.list_1.list_2 ul li h4 a').slice(0, 10).get();

    // 映射并处理文章列表，利用缓存获取详情
    const items = await Promise.all(
        list.map((item) => {
            const $item = $(item);
            const title = $item.text().trim();
            // 使用 URL 构造函数处理相对路径
            const link = new URL($item.attr('href') ?? '', baseUrl).href;

            // 使用 cache.tryGet 来实现缓存逻辑
            return cache.tryGet(link, async () => {
                const { data: detailHtml } = await got(link);
                const $detail = load(detailHtml);

                // 提取文章内容
                const description = $detail('#UCAP-CONTENT > div.trs_editor_view.TRS_UEDITOR.trs_paper_default').html() ?? '';
                
                // 提取发布时间，并使用原代码的正则替换逻辑处理时间格式
                const pubDateStr = $detail('meta[name="firstpublishedtime"]').attr('content');
                let pubDate;
                
                if (pubDateStr) {
                    // 原代码的逻辑：将 'YYYY-MM-DD-HH:mm:ss' 格式中的第二个 '-' 替换为空格，变成 'YYYY-MM-DD HH:mm:ss'
                    const cleanedDateStr = pubDateStr.replace(/^(\d{4}-\d{2}-\d{2})-(\d{2}:\d{2}:\d{2})$/, '$1 $2');
                    pubDate = parseDate(cleanedDateStr); 
                }

                return {
                    title,
                    link,
                    description,
                    pubDate,
                };
            });
        })
    );

    // 返回最终数据对象
    return {
        // 频道标题
        title: '国务院办公厅 - 最新政策',
        // 频道链接
        link: baseUrl,
        // 频道描述
        description: '中华人民共和国中央人民政府门户网站发布的最新政策信息。',
        // 文章列表
        item: items,
    };
}