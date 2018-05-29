const add = (a,b) => a+b;

test('should add two numbers',()=>{
    const result = add(3,4);
    expect(result).toBe(7);
});

const generateGreeting = (name = "anonymous") => `hello ${name}`;

test('should generate greeting from name', () =>{
    expect(generateGreeting('akash')).toBe('hello akash');
});

test('should generate greeting for no name',() => {
    const result = generateGreeting();
    expect(result).toBe('hello anonymous');
});