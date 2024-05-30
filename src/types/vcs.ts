import {FunctionalComponent} from "vue";
import {AntdIconProps} from "@ant-design/icons-vue/lib/components/AntdIcon";
import {
    QuestionOutlined,
    GithubOutlined,
    GitlabOutlined
} from "@ant-design/icons-vue";

export interface VCS {
    type: Type;
    username: string;
    address: string;
}

export enum Type {
    Unknown,
    Github,
    Gitlab,
    Gitea
}

type IconType = FunctionalComponent<AntdIconProps>;

export const VCSType2Icon: { [key in Type]: IconType } = {
    [Type.Unknown]: QuestionOutlined,
    [Type.Github]: GithubOutlined,
    [Type.Gitlab]: GitlabOutlined,
    [Type.Gitea]: QuestionOutlined
};