import {BookOutlined} from "@ant-design/icons-vue";
import {createKeyTitleMap, MenuItem, MyMenuItem2AntdItemType} from "./menu_item";
import {ItemType} from "ant-design-vue";

let menu: MenuItem[] = [
    {
        title: 'News',
        key: 'news/',
        icon: BookOutlined,
        description: 'news',
    },
    {
        title: 'Researcher',
        key: 'researcher',
        icon: BookOutlined,
        description: 'researcher',
    },
]

let antdMenu: ItemType[] = []

menu.forEach((item: MenuItem) => {
    antdMenu.push(MyMenuItem2AntdItemType(item));
})

let key2title = createKeyTitleMap(menu)

export {menu, antdMenu, key2title};
