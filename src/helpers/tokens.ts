


export const setToken = (tokenObj: any) => {
  if (tokenObj.access) {
    localStorage.setItem("accessToken", tokenObj.access);
  }
  if (tokenObj.refresh) {
    localStorage.setItem("refreshToken", tokenObj.refresh);
  }
};

export const getAccessToken = () => localStorage.getItem("accessToken");

export const getRefreshToken = () => localStorage.getItem("refreshToken");


export const clearToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};