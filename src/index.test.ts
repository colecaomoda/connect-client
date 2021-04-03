import ConnectClient from "./index"
const { expect } = require('chai')
const nock = require('nock')
const API_URL = 'https://connect.colecao.moda'

describe('client', () => {
  beforeEach(() => {
    nock(API_URL)
      .put(/\/suppliers/)
      .reply(201, {})

    nock(API_URL)
      .put(/\/materials/)
      .reply(201, {})

    nock(API_URL)
      .put(/\/trimmings/)
      .reply(201, {})

    nock(API_URL)
      .put(/\/custom_fields/)
      .reply(201, {})

    nock(API_URL)
      .put(/\/theme_clothings\/123/)
      .reply(201, {})

    nock(API_URL)
      .put(/\/workflow_executions\/78e5ef65-086d-4200-8845-ed652da1185b/)
      .reply(201, {})
  })

  it('should upsert suppliers', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.upsertSuppliers([{
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

  it('should upsert materials', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.upsertMaterials([{
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

  it('should upsert trimmings', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.upsertTrimmings([{
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

  it('should update custom fields', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.updateCustomFields([]).then(() => {
      expect(true).equal(true)
    })
  })

  it('should update theme clothing', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.updateThemeClothing({
      id: 123,
      code: "abc123"
    }).then(() => {
      expect(true).equal(true)
    })
  })

  it('should update workflow execution', () => {
    const client = new ConnectClient({
      apiUrl: API_URL,
      authToken: "abc123"
    })

    return client.updateWorkflowExecution({
      uuid: "78e5ef65-086d-4200-8845-ed652da1185b",
      status: "failed",
      error: "Error",
      error_code: "internal_server_error"
    }).then(() => {
      expect(true).equal(true)
    })
  })
})