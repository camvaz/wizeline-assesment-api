// index.js
const request = require('supertest')
const chai = require('chai')
const expect = chai.expect

const { createApp } = require('../dist/index')

describe('Our server', () => {
  let app

  before((done) => {
    app = createApp()
    app.listen((err) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  it('should send back a Hello World text', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200, (err, res) => {
        if (err) {
          return done(err)
        }
        callStatus = res.text
        expect(callStatus).to.equal('Hello World!')
        done()
      })
  })

  it('should send a body with stock properties', (done) => {
    request(app)
    .get('/stock')
    .expect('Content-Type', /json/)
    .expect(200, (err, res) => {
      if (err) {
        return done(err)
      }
      const {name,symbol,totalCash} = res.body
      expect(typeof name).to.equal('string')
      expect(typeof symbol).to.equal('string')
      expect(typeof totalCash.raw).to.equal('number')
      done()
    })
  })
})
