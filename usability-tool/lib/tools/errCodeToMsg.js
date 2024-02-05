export default function errCodeToMessage(errorCode) {
  switch (errorCode) {
    case "auth/email-already-exists":
      return "Email provided is already in use";
    case "auth/invalid-email":
      return "Email provided is invalid";
    case "auth/invalid-password":
      return "Password provided is invalid";
    case "auth/invalid-credential":
      return "User not found. Please check email and password and try again";
    case "auth/too-many-requests":
      return "Too many incorrect attempts, please try again later";
    case "auth/user-not-found":
      return "User not found. Please check email and password and try again";
    case "auth/weak-password":
      return "Password must be at least 6 characters";
    default:
      return errorCode;
  }
}
