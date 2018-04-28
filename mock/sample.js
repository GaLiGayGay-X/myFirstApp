const list = {
  "data": {
    "dataGrid": {
      "footer": {},
      "rows": [
        {
          "description": "名族",
          "enumType": "MZ",
          "enumTypeId": "2c94a274515b79d501515b7c9f6d0000",
          "leaf": "1",
          "operateTime": "2015-12-11 00:00:00",
          "parentId": "root"
        },
        {
          "description": "机构类型",
          "enumType": "ORG_TYPE",
          "enumTypeId": "40289fe146d78e950146d79406f50000",
          "leaf": "1",
          "operateTime": "2015-12-11 00:00:00",
          "parentId": "root"
        },
        {
          "description": "性别",
          "enumType": "GENDAR",
          "enumTypeId": "40289fe146d78e950146d79ac5ba0003",
          "leaf": "1",
          "operateTime": "2014-06-26 00:00:00",
          "parentId": "root"
        },
        {
          "description": "证件类型",
          "enumType": "IDENTITY_TYPE",
          "enumTypeId": "40289fe146d78e950146d79af38a0004",
          "leaf": "1",
          "operateTime": "2014-06-26 00:00:00",
          "parentId": "root"
        },
        {
          "description": "帐户类型",
          "enumType": "USER_TYPE",
          "enumTypeId": "40289fe146d78e950146d79ba02d0006",
          "leaf": "1",
          "operateTime": "2014-06-26 00:00:00",
          "parentId": "root"
        },
        {
          "description": "字体",
          "enumType": "FONT",
          "enumTypeId": "40289fe146d78e950146d79ba02d0010",
          "leaf": "1",
          "operateTime": "2015-12-11 00:00:00",
          "parentId": "root"
        },
        {
          "description": "字体大小",
          "enumType": "FONT_SIZE",
          "enumTypeId": "40289fe146d78e950146d79ba02d0011",
          "leaf": "1",
          "operateTime": "2015-12-11 00:00:00",
          "parentId": "root"
        }
      ],
      "total": 7
    }
  },
  "schema": "DATA"
}

module.exports = {
  getSampleList(req, res) {
    res.status(200).json(list)
  },
}
