import {FunctionalComponent, h} from "vue";
import {AntdIconProps} from "@ant-design/icons-vue/lib/components/AntdIcon";
import {ItemType} from "ant-design-vue";

type IconType = FunctionalComponent<AntdIconProps>;

export interface MenuItem {
    index?: number;
    key: string;
    title: string;
    icon?: IconType;
    description?: string;
    children?: MenuItem[];
}

export function MyMenuItem2AntdItemType(item: MenuItem): ItemType {
    const children = item.children?.map(child => MyMenuItem2AntdItemType(child));

    return {
        label: item.title,
        key: item.key,
        icon: item.icon ? h(item.icon) : undefined,
        children: children,
    };
}

export function createKeyTitleMap(items: MenuItem[]): Record<string, string> {
    let map: Record<string, string> = {};

    function traverse(items: MenuItem[]) {
        for (let item of items) {
            const lastKey = item.key.split('/').pop()
            if (lastKey) {
                map[lastKey] = item.title;  // 将当前项的 key 和 title 添加到映射中
            }
            if (item.children && item.children.length > 0) {
                traverse(item.children);  // 递归遍历子项
            }
        }
    }

    traverse(items);
    return map;
}