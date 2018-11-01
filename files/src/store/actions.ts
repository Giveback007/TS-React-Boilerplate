export const APP_TEST = 'APP_TEST';

export class AppTest {
    readonly type = APP_TEST;
    payload = { test: 1 };
};

export type AppActions = AppTest;
