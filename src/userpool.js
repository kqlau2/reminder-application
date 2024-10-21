import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: "ap-southeast-1_5E716baSQ",
  ClientId: "7d92alnvsqu9qkm53pvhabdnre",
};
export default new CognitoUserPool(poolData);