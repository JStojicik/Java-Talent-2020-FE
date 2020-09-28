const noop = () => {
};
test('can be used in place of `var`', () => {
    let bandName = 'Queen';
    let isBestBand = true;
    expect(bandName)
        .toBe('Queen');
    expect(isBestBand)
        .toBe(true);
});

test('can modify the value of a `let` variable even in the next block statement', () => {
    let releaseName = 'ES6';
    {
        releaseName = 'ES2015';
    }
    expect(releaseName)
        .toBe('ES2015');
});

test('cannot modify the value of a `const` variable', () => {
    function getReleaseName() {
        let releaseName = 'ES6'; 
        releaseName = 'ES2015'; 
        return releaseName;
    }

    expect(getReleaseName)
        .not
        .toThrow();
});

test('is trapped inside of an `if` statement', () => {
    if (true) {
        let b = 1;
    }
    expect(() => noop(b))
        .toThrow('b is not defined');
});
