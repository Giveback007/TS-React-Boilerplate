export const APP_TEST = "APP_TEST";

export class AppTest {
    public readonly type = APP_TEST;
    public payload = { test: 1 };
}

export type AppActions = AppTest;
