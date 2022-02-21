import got from "got";

class motwClient {
  static async getHunterData(hunterIndex) {
    try {
      const url = `http://motwapi.com/api/v1/playbooks/${hunterIndex}`;
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default motwClient;
