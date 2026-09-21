(function(){
  "use strict";

  const GUEST_ACTIVE_KEY="project_zero_guest_session_active_v1";
  const TRUSTED_UID_KEY="project_zero_mobile_trusted_account_uid_v1";
  const DEVICE_GUEST_TOKEN_KEY="project_zero_device_guest_token_v1";

  function read(key){
    try{return String(localStorage.getItem(key)||"");}catch(_){return "";}
  }
  function write(key,value){
    try{
      if(value) localStorage.setItem(key,String(value));
      else localStorage.removeItem(key);
    }catch(_){}
  }
  function normalizeUid(userOrUid){
    if(userOrUid&&typeof userOrUid==="object")return String(userOrUid.uid||userOrUid.id||"");
    return String(userOrUid||"");
  }

  function makeDeviceToken(){
    try{
      if(window.crypto&&typeof window.crypto.randomUUID==="function")return window.crypto.randomUUID();
    }catch(_){}
    return "dev-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
  }

  // Generated once per device/browser profile and never rotated. Sent with
  // every guest-login request so the server can recognize "this is the same
  // device that already has a guest account" instead of creating a new one
  // every time the local refresh token is missing (offline, storage cleared,
  // restore() not finished yet, etc.).
  function getOrCreateDeviceGuestToken(){
    let token=read(DEVICE_GUEST_TOKEN_KEY);
    if(!token){
      token=makeDeviceToken();
      write(DEVICE_GUEST_TOKEN_KEY,token);
    }
    return token;
  }

  window.PZMobileAccountSession=Object.freeze({
    trustedUid:()=>read(TRUSTED_UID_KEY),
    trust(userOrUid){const uid=normalizeUid(userOrUid);if(uid)write(TRUSTED_UID_KEY,uid);return uid;},
    forget(){write(TRUSTED_UID_KEY,"");},
    isTrusted(userOrUid){const uid=normalizeUid(userOrUid);return Boolean(uid)&&read(TRUSTED_UID_KEY)===uid;},
    isGuestActive:()=>read(GUEST_ACTIVE_KEY)==="1",
    setGuestActive(active){write(GUEST_ACTIVE_KEY,active?"1":"");},
    deviceGuestToken:getOrCreateDeviceGuestToken,
    // Guest identities may only be created from a direct player action.
    mayCreateGuest(explicitAction){return explicitAction===true;}
  });
})();
