import {Website} from "./website.ts";
import {VCS} from "./vcs.ts";
import {Social} from "./social.ts";
import {Vulnerability} from "./vulnerability.ts";
import {Nickname} from "@/types/nickname.ts";
import {Organization} from "@/types/organization.ts";
import {Email} from "@/types/email.ts";
import {DataSource} from "@/types/datasource.ts";
import {Publication} from "@/types/publication.ts";
import {Present} from "@/types/present.ts";
import {Opensource} from "@/types/opensource.ts";
import {Other} from "@/types/other.ts";
import {IT} from "@/types/it.ts";
import {Photo} from "@/types/photo.ts";
import {Education} from "@/types/education.ts";
import {Job} from "@/types/job.ts";

export interface Researcher {
    // basic
    ID: number;
    id: string;
    name: string;
    nicknames: Nickname[];
    introduction: string;
    photo_url: string;
    photos: Photo[];
    organizations: Organization[];
    jobs: Job[];
    educations: Education[];
    emails: Email[];
    websites: Website[];

    // vcs
    VCSs: VCS[];
    opensources: Opensource[];
    others: Other[];

    // social media
    socials: Social[];
    its: IT[];

    publications: Publication[];
    presents: Present[];

    // cve
    vulnerabilities: Vulnerability[];

    // data_sources
    data_sources: DataSource[];
}
