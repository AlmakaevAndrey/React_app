import {
    ACCOUNTS_COUNT,
    ACCOUNTS_EXPORT,
    ACCOUNTS_GRID,
    ACCOUNTS_PAGE,
    ACCOUNT_DETAILS
} from 'API/Constants/Accounts/Accounts.constants';
import HttpService from 'API/HTTP.service';
import {
    IAccountsFileData,
    IAccountsExportQuery,
    IAccountsGridData,
    IAccountsGridItem,
    IAccountsPagingQuery,
    IAccountsQuery
} from 'Modules/Administrative/Accounts/Accounts.types';
import { IAccount } from './Accounts.types';

class AccountsService extends HttpService {
    public async accountsExport(query: IAccountsExportQuery): Promise<IAccountsFileData> {
        return await this.API.post(ACCOUNTS_EXPORT, query).then((res) => res.data);
    }

    public async getAccountsGridData(query: IAccountsPagingQuery): Promise<IAccountsGridData> {
        return await this.API.post(ACCOUNTS_GRID, query).then((res) => res.data);
    }

    public async getAccountsPage(query: IAccountsPagingQuery): Promise<IAccountsGridItem[]> {
        return await this.API.post(ACCOUNTS_PAGE, query).then((res) => res.data);
    }

    public async getAccountsCount(query: IAccountsQuery): Promise<number> {
        return await this.API.post(ACCOUNTS_COUNT, query).then((res) => res.data);
    }

    public async getAccountDetails(customerId: number): Promise<IAccount> {
        return await this.API.post(ACCOUNT_DETAILS, customerId).then((res) => res.data);
    }
}

export const accountsService = new AccountsService();
