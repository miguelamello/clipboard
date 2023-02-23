const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Returns a trivial partition key if no event is provided', () => {
    expect(deterministicPartitionKey(null)).toEqual('0');
  });

  it('Returns the partition key of the event if it exists', () => {
    const event = { partitionKey: 'my-partition-key' };
    expect(deterministicPartitionKey(event)).toEqual('my-partition-key');
  });

  it('returns a hash of the event if it has no partition key', () => {
    const event = { data: 'some-data' };
    const hash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    expect(deterministicPartitionKey(event)).toEqual(hash);
  });

  it('returns a hash of the candidate if it is too long', () => {
    const longString = 'x'.repeat(300);
    const hash = crypto.createHash('sha3-512').update(longString).digest('hex');
    expect(deterministicPartitionKey({ partitionKey: longString })).toEqual(hash);
  });

  it('returns the candidate as a string', () => {
    const candidate = { foo: 'bar' };
    expect(typeof deterministicPartitionKey(candidate)).toEqual('string');
  });

});
