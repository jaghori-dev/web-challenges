import { add, subtract, multiply,divide } from ".";


test("creates func adds a and b",()=>{
    const result = add(2, 3)
    expect(result).toBe(5)
})
test("creates func which adds a, -b ,returns negative value if greater num is negative",()=>{
    const result1 = add(2, -3)
    expect(result1).toBeLessThan(0)

})
test("creates func adds -a, b returns negative value if greater num is negative",()=>{
    const result2 = add(-4, 3)
    expect(result2).toBeLessThan(0)
})

test("creates function which subtracts a and b",()=>{
const result = subtract(15, 5)
expect(result).toBe(10)
})
test("creates function which subtracts a and b returns negative value if second argument is greater then first argument",()=>{
const result = subtract(5, 10)
expect(result).toBeLessThan(0)
})

test("create func which multiplays a and b",()=>{
    const result = multiply(2, 4)
    expect(result).toBe(8)
})
test("create func which multiplays a and b returns negative value if the first argument is negative",()=>{
    const result = multiply(-2, 3)
    expect(result).toBe(-6)
})
test("create func which multiplays a and b returns positive value if the arguments are negative",()=>{
    const result = multiply(-2, -5)
    expect(result).toBeGreaterThan(0)
})
test("create func which divides a and b",()=>{
    const result = divide(9, 3)
    expect(result).toBe(3)
})
test("create func which divides a and b, returns 'You should not do this!' if the second argument is 0",()=>{
    const result = divide(5, 0)
    expect(result).toBe("You should not do this!")
})
