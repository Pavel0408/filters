const hasValue = true;
export const conditions = {
  String: {
    equalsTo: {
      displayName: "Equals to",
      hasValue
    },
    startsWith: {
      displayName: "Starts with",
      hasValue
    },
    endsWith: {
      displayName: "Ends with",
      hasValue
    },
    contains: {
      displayName: "Contains",
      hasValue
    },
    isEmpty: {
      displayName: "Is empty",
      hasValue: false
    },
    notEqualsTo: {
      displayName: "Not equalsTo",
      hasValue
    },
    in: {
      displayName: "In",
      hasValue
    },
    notIn: {
      displayName: "Not in",
      hasValue
    },
    notEmpty: {
      displayName: "Not empty",
      hasValue: false
    }
  },

  Numeric: {
    // числа, везде просто ввод одного числа
    equals: {
      displayName: "Equals",
      hasValue
    },
    lessThan: {
      displayName: "Less than",
      hasValue
    },
    lessOrEquals: {
      displayName: "Less or equals",
      hasValue
    },
    greaterThan: {
      displayName: "Greater than",
      hasValue
    },
    greaterOrEquals: {
      displayName: "Greater or equals",
      hasValue
    },
    notEquals: {
      displayName: "Not equals",
      hasValue
    },
    isEmpty: {
      displayName: "Is empty",
      hasValue: false
    },
    in: {
      displayName: "In",
      hasValue
    },
    notIn: {
      displayName: "Not in",
      hasValue
    },
    notEmpty: {
      displayName: "Not empty",
      hasValue: false
    }
  },
  Currency: {
    // числа, везде просто ввод одного числа
    equals: {
      displayName: "Equals",
      hasValue
    },
    lessThan: {
      displayName: "Less than",
      hasValue
    },
    lessOrEquals: {
      displayName: "Less or equals",
      hasValue
    },
    greaterThan: {
      displayName: "Greater than",
      hasValue
    },
    greaterOrEquals: {
      displayName: "Greater or equals",
      hasValue
    },
    notEquals: {
      displayName: "Not equals",
      hasValue
    },
    isEmpty: {
      displayName: "Is empty",
      hasValue: false
    },
    in: {
      displayName: "In",
      hasValue
    },
    notIn: {
      displayName: "Not in",
      hasValue
    },
    notEmpty: {
      displayName: "Not empty",
      hasValue: false
    }
  },
  Date: {
    lessOrEquals: {
      displayName: "Less or equals",
      hasValue
    }, // одна дата
    greaterOrEquals: {
      displayName: "Greater or equals",
      hasValue
    }, // одна дата
    notEquals: {
      displayName: "Not equals",
      hasValue
    }, // одна дата
    isEmpty: {
      displayName: "Is empty",
      hasValue: false
    },
    notEmpty: {
      displayName: "Not empty",
      hasValue: false
    },
    last20Minuts: {
      displayName: "Last 20 minuts",
      hasValue: false
    },
    today: {
      displayName: "Today",
      hasValue: false
    },
    yesterday: {
      displayName: "Yesterday",
      hasValue: false
    },
    last7Days: {
      displayName: "Last 7 days",
      hasValue: false
    },
    last30Days: {
      displayName: "Last 30 days",
      hasValue: false
    },
    last60Days: {
      displayName: "Last 60 days",
      hasValue: false
    },
    last90Days: {
      displayName: "Last 90 days",
      hasValue: false
    },
    thisMonth: {
      displayName: "This month",
      hasValue: false
    },
    lastMonth: {
      displayName: "Last month",
      hasValue: false
    },
    last3Months: {
      displayName: "Last3 months",
      hasValue: false
    },
    last6Months: {
      displayName: "Last6 months",
      hasValue: false
    },
    thisQuater: {
      displayName: "This quater",
      hasValue: false
    },
    lastQuater: {
      displayName: "Last quater",
      hasValue: false
    },
    thisYear: {
      displayName: "This year",
      hasValue: false
    },
    lastYear: {
      displayName: "Last year",
      hasValue: false
    }
  },

  Enum: {
    // dictionary selector
    equalsTo: {
      displayName: "Equals to",
      hasValue
    }, // один вариант
    contains: {
      displayName: "Contains",
      hasValue
    }, // содержит часть слова
    isEmpty: {
      displayName: "Is empty",
      hasValue: false
    },
    notEquals: {
      displayName: "Not equals",
      hasValue
    }, // один вариант, не равно
    in: {
      displayName: "In",
      hasValue
    }, // мультиселектор, одно из
    notIn: {
      displayName: "Not in",
      hasValue
    }, // мультиселектор, не одно из
    notEmpty: {
      displayName: "Not empty",
      hasValue: false
    }
  },

  Boolean: {
    // да нет
    equalsTo: {
      displayName: "Equals to",
      hasValue
    }
  }
};
