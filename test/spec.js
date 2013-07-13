(function (window) {
    var lib = require('bestander-jasmine');
    for (var key in lib) {
        if (lib.hasOwnProperty(key)) {
            window[key] = lib[key];
        }
    }
}(window));

var aload = require('aload'),
    img = document.querySelector('img'),
    loadEvent = jasmine.createSpy('loadEvent');

describe('aload', function () {

    it('should be defined', function () {
        expect(aload).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof aload).toEqual('function');
    });
});

describe('When you use aload on an image', function () {

    it('shouldn\'t have "src" attibute', function () {
        expect(img.src).toEqual('');
    });

    it('should set "src" attibute', function () {
        var src = img.getAttribute('data-async');

        aload(img);

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