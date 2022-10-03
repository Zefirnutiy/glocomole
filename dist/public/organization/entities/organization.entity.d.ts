import { Theme } from 'src/public/theme/entities/theme.entity';
export declare class Organization {
    id: number;
    title: string;
    password: string;
    email: string;
    emailNotification: boolean;
    key: string;
    userLimit: number;
    statistic: boolean;
    protectionCh: boolean;
    date: Date;
    time: Date;
    themeId: Theme;
}
