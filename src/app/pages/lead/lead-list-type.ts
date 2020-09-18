/*
* 引导项配置字段参数接口
* 当前配置为单独一项引导
* 实际使用为数组列表
* */
export interface LeadListType {
    /*
    * id
    * 根据id获取当前页面索引项
    * 如果当前项没有找到匹配id，进行判断是否是当前页面 如果是当前页面证明用户没有当前操作权限跳过这一项 否则需要根据路由进行跳转
    * */
    id: string;
    // 标题: 当前操作项标题<必传>
    title: string;
    // 详细信息: 当前操作项具体信息<必传>
    details: string;
    // 提示框位置可选 默认右侧根据剩余空间大小显示具体位置 top、top-left、top-right、bottom、bottom-left、bottom-right、left、right<暂定>
    position?: string;
    // 路由: 当前操作项所在路由 根据路由是否是当前页面来进行判断是否需要跳转页面
    router: string;
    // 当前列匹配元素
    HTMLDom?: any;
}
