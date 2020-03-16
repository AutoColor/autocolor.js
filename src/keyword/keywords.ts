import Keyword from "./Keyword";
import KwError from "./keywords/KwError";
import KwErrorWithColon from "./keywords/KwErrorWithColon";
import KwWarn from "./keywords/KwWarn";
import KwInfo from "./keywords/KwInfo";
import KwSuccess from "./keywords/KwSuccess";
import KwSucceeded from "./keywords/KwSucceeded";
import KwNotice from "./keywords/KwNotice";
import KwStatus from "./keywords/KwStatus";
import KwAccept from "./keywords/KwAccept";
import KwDenied from "./keywords/KwDenied";
import KwDeny from "./keywords/KwDeny";
import KwReject from "./keywords/KwReject"
import KwBlue from "./keywords/KwBlue"
import KwCorrect from "./keywords/KwCorrect"
import KwDelete from "./keywords/KwDelete"
import KwFail from "./keywords/KwFail"
import KwFinished from "./keywords/KwFinished"
import KwGreen from "./keywords/KwGreen"
import KwInfoWithColon from "./keywords/KwInfoWithColon"
import KwMagenta from "./keywords/KwMagenta"
import KwNo from "./keywords/KwNo"
import KwRed from "./keywords/KwRed"
import KwStatusWithColon from "./keywords/KwStatusWithColon"
import KwSuccessWithColon from "./keywords/KwSuccessWithColon"
import KwWaiting from "./keywords/KwWaiting"
import KwWarningWithColon from "./keywords/KwWarningWithColon"
import KwYellow from "./keywords/KwYellow"
import KwYes from "./keywords/KwYes"

export default class Keywords {
  private static registeredKeywords: Keyword[] = [
    new KwAccept,
    new KwBlue,
    new KwCorrect,
    new KwDelete,
    new KwDenied,
    new KwDeny,
    new KwError,
    new KwErrorWithColon,
    new KwFail,
    new KwFinished,
    new KwGreen,
    new KwInfo,
    new KwInfoWithColon,
    new KwMagenta,
    new KwNo,
    new KwNotice,
    new KwRed,
    new KwReject,
    new KwStatus,
    new KwStatusWithColon,
    new KwSucceeded,
    new KwSuccess,
    new KwSuccessWithColon,
    new KwWaiting,
    new KwWarn,
    new KwWarningWithColon,
    new KwYellow,
    new KwYes
  ];

  /**
   * Register a new keyword.
   */
  static register(keyword: Keyword) {
    this.registeredKeywords.push(keyword);
  }

  /**
   * Get all registered keywords.
   */
  static getRegistered(): readonly Keyword[] {
    return this.registeredKeywords;
  }
}
