export interface ShowSignupDTO {
    bandId: string,
    weekday: SHOW_DAY,
    startTime: number,
    endTime: number
};

export interface ShowModel {
    id: string,
    weekday: SHOW_DAY,
    startTime: number,
    endTime: number,
    bandId: string
}

export enum SHOW_DAY {
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

export interface ShowDetailDTO {
    weekday: string;
}