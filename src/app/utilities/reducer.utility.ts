export const userPayloadPrepare = ({ accessToken, refreshToken, ...rest }: any) => {
  return {
    isAuthenticated: true,
    ...rest,
    // _id,
    // email,
    // role,
    // username,
    // avatarURL,
    // socialAuth,
  };
};
