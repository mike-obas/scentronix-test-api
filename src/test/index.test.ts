const expect = require("chai").expect;
const nock = require("nock");
import { testServer } from "../handlers/findServer";
import { getLowestPriority } from "../utils/server";

const onlineServers = [
  {
    url: "https://gitlab.com",
    priority: 4,
  },
  {
    url: "http://app.scnt.me",
    priority: 3,
  },
];

const offlineServer = {
  url: "https://does-not-work.perfume.new",
  priority: 1,
};

describe("Online server test", () => {
  beforeEach(() => {
    //mocks the get request to the provided server endpoint
    nock(onlineServers[0].url).get("/").reply(200);
  });

  it("Should return server object for online server", async () => {
    const response = await testServer(onlineServers[0]);
    //expect an object
    expect(typeof response).to.equal("object");
    //Test result of server object
    expect(response?.url).to.equal(onlineServers[0].url);
  });
});

describe("Offline server test", () => {
  beforeEach(() => {
    //mocks the get request to the provided server endpoint
    nock(offlineServer.url).get("/").reply(400);
  });

  it("Should return null for offline server", async () => {
    const response = await testServer(offlineServer);
    //expect an object back
    expect(typeof response).to.equal("object"); // null has typeof object too
    //Test for null value
    expect(response).to.equal(null);
  });
});

describe("Lowest priority test", () => {
  it("Should return the online server with the lowest priority", async () => {
    const response = getLowestPriority(onlineServers);
    //expect an object back
    expect(typeof response).to.equal("object");
    //Test for lowest priority value
    expect(response.priority).to.equal(3);
  });
});
