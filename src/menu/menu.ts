import {BookOutlined} from "@ant-design/icons-vue";
import {createKeyTitleMap, MenuItem, MyMenuItem2AntdItemType} from "./menu_item";
import {ItemType} from "ant-design-vue";

let menu: MenuItem[] = [
    {
        title: 'News',
        key: 'news/',
        icon: BookOutlined,
        description: '加入云原生安全资讯项目, 每天阅读安全资讯，总结并共享。',
    },
    {
        title: 'Researcher',
        key: 'researcher',
        icon: BookOutlined,
        description: '追踪研究者动态：漏洞线索、研究方向、业界进展就隐藏在信息流中。',
    },
]

let antdMenu: ItemType[] = []

menu.forEach((item: MenuItem) => {
    antdMenu.push(MyMenuItem2AntdItemType(item));
})

let key2title = createKeyTitleMap(menu)

export {menu, antdMenu, key2title};
