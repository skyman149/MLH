const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');

describe('Image section', function () {

    describe('Verifying elements and names and positive test cases', function () {
        it('TC-062 Label for Image', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const label = $$(sel.imageSection)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-063 Label for Image = 5. Upload an image (optional).', function () {
            const text = $$(sel.imageSection)[4].getAttribute('textContent');
            expect(text).toEqual(exp.labelImage);
        });
    });
});