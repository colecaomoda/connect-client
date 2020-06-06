const ConnectClient = require("./index.ts").default
const { expect } = require('chai')
const nock = require('nock')
const API_URL = 'https://connect.colecao.moda'

console.log(ConnectClient)

describe('client', () => {
  beforeEach(() => {
    nock(API_URL)
      .post(/\/suppliers/)
      .reply(201, {})

    nock(API_URL)
      .post(/\/materials/)
      .reply(201, {})

    nock(API_URL)
      .post(/\/trimmings/)
      .reply(201, {})
  })

  it('should create suppliers', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.createSuppliers([{
      integration_id: "1",
      business_name: "test",
      code: "abc123",
      description: "desc",
      document: "11111",
      address: "A",
      address_number: "321",
      neighborhood: "B",
      postal_code: "123456",
      phone: "99999999",
      contact_person: "Test",
      email: "test@colecao.moda"
    }]).then(() => {
      expect(true).equal(true)
    })
  })

  it('should create materials', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.createMaterials([{
      integration_id: "1",
      name: "test",
      code: "abc123",
      description: "desc",
      weight: 200.0,
      width: 10.0,
      construction: "eee",
      shrinkage: "iii",
      stretch: "ooo",
      prices: [],
      colors: [],
      compositions: [],
      supplier_integration_ids: []
    }]).then(() => {
      expect(true).equal(true)
    })
  })

  it('should create trimmings', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.createTrimmings([{
      integration_id: "1",
      name: "test",
      code: "abc123",
      description: "desc",
      width: 10.0,
      prices: [],
      colors: [],
      compositions: [],
      supplier_integration_ids: []
    }]).then(() => {
      expect(true).equal(true)
    })
  })
})