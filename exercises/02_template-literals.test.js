test('should support string interpolation', () => {
    const person = {
        name: 'John Doe',
        friends: [
            'Such Creative',
            'Much Wow'
        ]
    };
    // construct a string using template literal string interpolation
    const personsFriends = `${person.name} has 2 friends: ${person.friends[0]}, ${person.friends[1]}`;
    expect(personsFriends)
        .toBe(
            'John Doe has 2 friends: Such Creative, Much Wow'
        );
});

test(`should support multi-line strings`, () => {
    // construct a string with multiple lines without needing escaped newline characters
    const multiLine = `
    How cool
    is this!?
  `;
    expect(multiLine)
        .toBe('\n    How cool\n    is this!?\n  ');
});
