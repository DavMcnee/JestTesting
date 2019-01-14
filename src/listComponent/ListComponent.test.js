import ListComponent from './ListComponent';
import api from '../api//ListApi';

describe('ListComponent > fetchList() > When the call to getList fails', () => {
    it('Should call fetchListFailed with the error', async () => {

        expect.hasAssertions();

        //Arrange
        const error = { message: "some error" };
        const errorResponse = () => Promise.reject(error);
        const componentInstance = new ListComponent();

        api.getList = jest.fn(() => errorResponse());
        componentInstance.fetchListFailed = jest.fn(() => { });

        //Act
        componentInstance.fetchList();

        //Assert
        try {
            await errorResponse;
        } catch (er) {
            expect(componentInstance.fetchListFailed).toHaveBeenCalledWith(error);
        }

    });
});