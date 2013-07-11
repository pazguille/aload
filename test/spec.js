(function (window) {
    var lib = require('bestander-jasmine');
    for (var key in lib) {
        if (lib.hasOwnProperty(key)) {
            window[key] = lib[key];
        }
    }
}(window));

var asyncall = require('asyncall'),
    img = document.querySelector('img'),
    loadEvent = jasmine.createSpy('loadEvent');

describe('asyncall', function () {

    it('should be defined', function () {
        expect(asyncall).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof asyncall).toEqual('function');
    });
});

describe('When you use asyncall on an image', function () {

    it('shouldn\'t have "src" attibute', function () {
        expect(img.src).toEqual('');
    });

    it('should set "src" attibute', function () {
        var src = img.getAttribute('data-async');

        asyncall(img);

        expect(img.src).not.toEqual('');

        expect(img.src).toEqual(src);
    });

    it('should remove "data-async" attibute', function () {
        expect(img.getAttribute('data-async')).toBe(null);
    });

    it('should load the image', function () {
        img.onload = function () {
            loadEvent();
            expect(loadEvent).toHaveBeenCalled();
        };

        waitsFor(function() {
            return loadEvent.callCount > 0;
        });
    });

});