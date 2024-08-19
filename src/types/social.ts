import {FunctionalComponent} from "vue";
import {AntdIconProps} from "@ant-design/icons-vue/lib/components/AntdIcon";
import {QuestionOutlined, TwitterOutlined} from "@ant-design/icons-vue";

export interface Social {
    type: Type;
    username: string
    address: string
}

export enum Type {
    Unknown,
    Twitter,
    Mastodon,
    Telegram,
    Reddit,
    Facebook,
    ResearchGate,
    LinkedIn,
    Youtube,
    Instagram
}

type IconType = FunctionalComponent<AntdIconProps>;

export const SocialType2Icon: { [key in Type]: IconType } = {
    [Type.Unknown]: QuestionOutlined,
    [Type.Twitter]: TwitterOutlined,
    [Type.Mastodon]: QuestionOutlined,
    [Type.Telegram]: QuestionOutlined,
    [Type.Reddit]: QuestionOutlined,
    [Type.Facebook]: QuestionOutlined,
    [Type.ResearchGate]: QuestionOutlined,
    [Type.LinkedIn]: QuestionOutlined,
    [Type.Youtube]: QuestionOutlined,
    [Type.Instagram]: QuestionOutlined,
}

export const SocialType2Text: { [key in Type]: string } = {
    [Type.Unknown]: "Unknown",
    [Type.Twitter]: "Twitter",
    [Type.Mastodon]: "Mastodon",
    [Type.Telegram]: "Telegram",
    [Type.Reddit]: "Reddit",
    [Type.Facebook]: "Facebook",
    [Type.ResearchGate]: "ResearchGate",
    [Type.LinkedIn]: "LinkedIn",
    [Type.Youtube]: "Youtube",
    [Type.Instagram]: "Instagram",
}