const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up

describe('Checking main functionality', function () {

    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const inputName = $(sel.name).addValue("LadyBug"); // addValue - when field is empty, setValue - when field must be cleared before adding new value
            const inputGender = $$(sel.gender)[1].click(); // [1] - she
            const inputAge = $(sel.age).addValue(123);
            const clickStory = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].getAttribute('title')
            const clickCreate = $(sel.create).isEnabled();
            browser.pause(3000); // 3 sec pause
            expect(clickCreate).toEqual(true);
        });
    });
});