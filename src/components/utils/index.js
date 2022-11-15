import visaIco from "../../static/cards/visa.svg";
import amexIco from "../../static/cards/amex.svg";
import mastercardIco from "../../static/cards/maestro.svg";
import discoverIco from "../../static/cards/discover.svg";

export const getCardType = async (creditCardNumber) => {
  let ccNumLength = creditCardNumber.length;
  let type = "";
  let icon = "";
  let isValid = true;

  if (creditCardNumber.length === 0)
    return {
      icon,
      type,
      isValid,
    };

    // Check validation for amex card
    if (creditCardNumber.startsWith("34") || creditCardNumber.startsWith("37")) {
      icon = amexIco;
      type = "amex";
    }

    // Check validation for discover card
    if (creditCardNumber.startsWith("6011")) {
      icon = discoverIco;
      type = "discover";
    }

    // Check validation for master card
    if (creditCardNumber.slice(0, 2) >= 51 && creditCardNumber.slice(0, 2) <= 55) {
      icon = mastercardIco;
      type = "mastercard";
    }

    // Check validation for visa card
    if (creditCardNumber.startsWith("4")) {
      icon = visaIco;
      type = "visa";
    }

    if (ccNumLength >= 13) {
      isValid = await isValidLength(type, ccNumLength);
    }

  return {
    icon,
    type,
    isValid,
  };
};

const isValidLength = (type, cardLength) => {
  if (["discover", "mastercard"].includes(type) && cardLength === 16) {
    return true;
  } else if (type === "amex" && cardLength === 15) {
    return true;
  } else if (type === "visa" && [13, 16].includes(cardLength)) {
    return true;
  } else {
    return false;
  }
};

export const validateCardNumber = (number) => {
  //Check if the number contains only numeric value and length between 13 to 19
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(number)) {
    return false;
  }
  return luhnCheck(number);
};

const luhnCheck = (number) => {
  let numberCheck = 0,
    numEven = false;
  for (var n = number.length - 1; n >= 0; n--) {
    var countDigit = number.charAt(n),
      digit = parseInt(countDigit, 10);

    if (numEven && (digit *= 2) > 9) digit -= 9;

    numberCheck += digit;
    numEven = !numEven;
  }

  return numberCheck % 10 === 0;
};
