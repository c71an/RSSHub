import { Route } from '@/types';
import got from '@/utils/got';
import dayjs from 'dayjs'; // 导入 dayjs

// API 基础 URL
const apiUrl = 'https://api-service.chanmama.com/v1/home/rank/hotAweme';

// 定义路由元数据
export const route: Route = {
    // 路由路径
    path: '/dy',
    // 路由名称
    name: '抖音热点视频日榜 Top 10',
    // 网站 URL (指向蝉妈妈首页或相关页面)
    url: 'https://www.chanmama.com',
    // 分类
    categories: ['social-media'],
    // 示例路径
    example: '/chanmama/dy',
    // 维护者
    maintainers: ['c71an'],
    // 处理器函数
    handler,
};

async function handler() {
    // 获取昨天的日期，格式为 YYYY-MM-DD
    const day = dayjs().subtract(1, 'day').format('YYYY-MM-DD');

    // 完整的 API URL
    const url = `${apiUrl}?day_type=day&day=${day}&star_category=&order_by=synthesize&page=1&size=50`;

    // 发起 GET 请求
    const response = await got(url);

    // 提取并限制列表到前 10 个
    const list = (response.data.data || []).slice(0, 10);

    // 拼接内容
    const content = list
        .map((item, index) => {
            // 清理 URL，删除问号及其之后的部分
            const cleanUrl = item.aweme_url.split('?')[0]; 
            
            // 构建 HTML 描述
            return `
                <p><strong>${index + 1}. <a href="${cleanUrl}" target="_blank">${item.aweme_title}</a></strong></p>
                <p><img src="${item.aweme_cover}" alt="${item.aweme_title} 封面" /></p>
            `;
        })
        .join('\n');

    // 返回最终数据对象
    return {
        // 频道标题
        title: `蝉妈妈 - 抖音热点视频日榜 Top 10 - ${day}`,
        // 频道链接
        link: 'https://www.chanmama.com/awake',
        // 频道描述
        description: `蝉妈妈提供的抖音热点视频日榜 Top 10，数据截止至 ${day}`,
        // 文章列表 (只有一个包含 Top 10 集合的项目)
        item: [
            {
                // 文章标题
                title: `抖音日榜 Top 10 视频 - ${day}`,
                // 文章描述 (包含所有视频的 HTML)
                description: content,
                // 文章链接 (指向数据来源 API 或相关页面)
                link: 'https://www.chanmama.com/awake',
                // GUID 使用日期确保唯一性
                guid: `chanmama_hot_aweme_${day}`, 
                // PubDate 使用昨天
                pubDate: dayjs(day).toDate(), 
            },
        ],
    };
}