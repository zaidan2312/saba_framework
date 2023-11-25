(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[108],{423:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Permission","pageModuleTitle":"Apps Management","pageDesc":"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs.","crudOpt":{"endpointName":"api/permission","baseUrl":"sso","serverSideGrid":false,"detailFromGrid":true,"detailPage":true,"hideTablePageLengthInfo":true,"dynamicColumnsFilterPos":"table-header","detailPageFieldSubHeader":["\'Permission ID : \'","subject"],"data":{"dynamicColumnsSearchFields":["title","description","subject"],"dynamicColumns":[{"fieldName":"title","type":"avatar_title","avatarTitleField":"title","avatarDescField":"subject","avatarClassName":"avatar-square-no-shadow bg-transparent"},{"fieldName":"description"}],"dynamicColumnsFilter":[{"fieldName":"id_app","fieldLabel":"App","type":"dropdown","rules":{"required":true},"dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false}}],"dynamicForm":[{"fieldName":"id_app","fieldLabel":"App","size":4,"type":"dropdown","dataFrom":{"api":"api/app?length=200","resp_key":"data","baseUrl":"sso","field_label":["name","info.appType"],"field_value":"id","field_img":"logo.appLogo","field_label_separator":" ~~~ ","api_getAlways":false}},{"fieldName":"subject","fieldLabel":"Permission ID","size":3,"disabledOnPage":{"add":false,"edit":true},"rules":{"required":true,"pattern":{"value":"/^[a-zA-Z0-9_-]+$/","message":"without space & without special character except (_) dan (-)"}}},{"fieldName":"title","fieldLabel":"Permission Title","size":5,"rules":{"required":true}},{"fieldLabel":"Permission Description","fieldName":"description","size":12},{"type":"tabs","fieldLabel":"Details","className":"mt-1","size":12,"tabVertical":false,"tabMenuAlign":"left","children":[{"tabTitle":"Permission Menu","tabIcon":"material:menu","tabContent":[{"fieldName":"permission_menu_tab_content","fieldLabel":"Permission Menu","type":"relationsCrud","size":12,"relationsCrud":{"pageId":"permission_menu_id","pageType":"crud","pageTitle":"Permission Menu Access","menuIcon":"material:menu","crudOpt":{"endpointName":"api/permission_menu?sort=id_menu&","baseUrl":"sso","initialFiltersCondition":[{"fieldNameCurrent":"id_permission","value_from_parentFieldName":"id"},{"fieldNameCurrent":"id_app","value_from_parentFieldName":"id_app","disablePageQueryParam":true}],"getApiSummaryData":false,"serverSideGrid":false,"detailPage":false,"detailPageFieldTitle":"menu_title","detailFromGrid":true,"disabledEdit":true,"deleteSelection":true,"data":{"dynamicColumns":[{"fieldName":"menu_title","columnName":"Title"},{"fieldName":"routePath","columnName":"Route Path"},{"fieldName":"state","columnName":"Type","type":"badge","colorFromField":"state_color","className":"","pill":false,"center":true,"sortable":false}],"dynamicForm":[{"fieldName":"id_permission","isHidden":true},{"fieldName":"id_app","isHidden":true,"includeOnPayload":false},{"fieldName":"id_permission2","includeOnPayload":false,"fieldLabel":"Menu","size":12,"type":"selectTable","rules":{"required":true},"dataFrom":{"api":"api/menu?flat_mode=true","get_params":[{"key":"id_permission","value":"id_permission","valueFrom":"other"},{"key":"id_app","value":"id_app","valueFrom":"other"}],"multiselectToCurrentForm":false,"multiselectToCurrentFormType":"form-repeater","multiselectPayloadExtra":[{"fieldName":"id","alias":"id_menu"}],"baseUrl":"sso","resp_key":"data","api_getAlways":true,"tableOpt":{"crudOpt":{"getAlwaysGrid":true,"data":{"dynamicColumns":[{"fieldName":"title"},{"fieldName":"routePath","columnName":"Route Path"},{"fieldName":"state","columnName":"Type","type":"badge","colorFromField":"state_color","className":"","pill":false,"center":true,"sortable":false}]}}}}}]}}}}]},{"tabTitle":"Permission Endpoint Access","tabIcon":"material:http","tabContent":[{"fieldName":"permission_endpoint_tab_content","fieldLabel":"Permission Endpoint Access","type":"relationsCrud","size":12,"relationsCrud":{"pageId":"permission_endpoint_id","pageType":"crud","pageTitle":"Permission Api Endpoint Access","menuIcon":"material:http","crudOpt":{"endpointName":"api/permission_endpoint","baseUrl":"sso","initialFiltersCondition":[{"fieldNameCurrent":"id_permission","value_from_parentFieldName":"id"},{"fieldNameCurrent":"id_app","value_from_parentFieldName":"id_app","disablePageQueryParam":true}],"getApiSummaryData":false,"serverSideGrid":false,"detailPage":false,"detailPageFieldTitle":"url_path","detailFromGrid":true,"disabledEdit":true,"deleteSelection":true,"data":{"dynamicColumns":[{"fieldName":"url_path","columnName":"Endpoint"}],"dynamicForm":[{"fieldName":"id_permission","isHidden":true},{"fieldName":"id_app","isHidden":true,"includeOnPayload":false},{"fieldName":"id_permission2x","includeOnPayload":false,"fieldLabel":"Endpoints","size":12,"type":"selectTable","rules":{"required":true},"dataFrom":{"api":"api/endpoint","get_params":[{"key":"id_permission","value":"id_permission","valueFrom":"other"},{"key":"id_app","value":"id_app","valueFrom":"other"}],"multiselectToCurrentForm":false,"multiselectToCurrentFormType":"form-repeater","multiselectPayloadExtra":[{"fieldName":"id","alias":"id_endpoint"}],"baseUrl":"sso","resp_key":"data","api_getAlways":true,"tableOpt":{"crudOpt":{"getAlwaysGrid":true,"data":{"dynamicColumns":[{"fieldName":"url_path","columnName":"Route Path"}]}}}}}]}}}}]}]}]}}}')}}]);
//# sourceMappingURL=108.ba3759ff.chunk.js.map