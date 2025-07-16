export interface IAccount {
    CustomerId: number;
    CustomerName: string;
    CustomerCodeName: string;
    SupervisorId: number;
    SupervisorFullName: string;
    SalesManagerId: number;
    SalesManagerFullName: string;
    InvoiceManagerId: number;
    InvoiceManagerFullName: string;
    ManagerId: number;
    ManagerFullName: string;
    PaidVacationDays: number;
    RampDownNotificationPeriod: number;
}