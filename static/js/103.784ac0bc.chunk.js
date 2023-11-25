(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[103],{418:function(e){e.exports=JSON.parse('{"pageType":"crud","pageTitle":"Apps","pageDesc":"List of Applications Created or Developed by you","pageModuleTitle":"Apps Management","crudOpt":{"endpointName":"api/app?length=200","baseUrl":"sso","serverSideGrid":false,"detailFromGrid":true,"detailPage":true,"disabledEdit":false,"disabledDelete":false,"disabledAdd":false,"gridTheme":"grid_card","gridSizeLg":"3","gridSizeMd":"6","gridSizeSm":"12","hideTablePagination":true,"hideTablePageLengthInfo":true,"dynamicColumnsFilterPos":"table-header","detailPageFieldSubHeader":["\'App Name : \'","name"],"data":{"dynamicColumnsSearchFields":["name","code"],"dynamicColumns":[{"fieldName":"name","type":"avatar_title","avatarImgField":"logo.appLogo","avatarTitleField":"name","avatarDescField":"code","avatarClassName":"avatar-square-no-shadow bg-transparent","avatarImgStyle":{"height":"60px","width":"60px","backgroundSize":"70%","backgroundRepeat":"no-repeat","backgroundPosition":"center center","boxShadow":"none"}},{"fieldName":"info.appType","lookupValue":[{"value":"service","label":"Api Service","icon":"material:api","class":"text-info"},{"value":"web","label":"Web App","icon":"material:web","class":"text-warning"},{"value":"desktop","label":"Desktop App","icon":"material:desktop_windows","class":"text-danger"},{"value":"mobile","label":"Mobile App","icon":"material:app_shortcut","class":"text-success"}]},{"fieldName":"info.programming_language.main_language","lookupValue":[{"value":"python","label":"Python","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/python.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"javascript","label":"Javascript","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/js.png","imgStyle":{"maxWidth":"20px","height":"auto"}}]},{"fieldName":"info.programming_language.framework","lookupValue":[{"value":"flask","label":"Flask","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/flask.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"react","label":"React","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/react.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"angular","label":"Angular","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/angular.png","imgStyle":{"maxWidth":"20px","height":"auto"}}]}],"dynamicColumnsFilter":[{"fieldName":"appType","fieldLabel":"App Type","type":"button-group","className":"justify-content-around","size":"8","dataFrom":{"value":[{"value":"web","label":"Web","color":"warning","icon":"material:web"},{"value":"service","label":"Api","color":"info","icon":"material:api"},{"value":null,"label":"All","icon":"material:apps","class":"text-secondary"}],"labelTranslations":true}}],"dynamicForm":[{"fieldName":"name","required":true,"size":6},{"fieldName":"code","fieldLabel":"App Code Name","placeholder":"unique_name","rules":{"required":true,"pattern":{"value":"/^[a-zA-Z0-9_-]+$/","message":"without space & without special character except (_) dan (-)"}},"size":3,"disabledOnPage":{"edit":true}},{"fieldName":"appType","fieldLabel":"App Type","initialValueFromOther":"info.appType","required":true,"type":"dropdown","size":3,"dataFrom":{"value":[{"value":"service","label":"Api Service","icon":"material:api","class":"text-info"},{"value":"web","label":"Web App","icon":"material:web","class":"text-warning"},{"value":"desktop","label":"Desktop App","icon":"material:desktop_windows","class":"text-danger"},{"value":"mobile","label":"Mobile App","icon":"material:app_shortcut","class":"text-success"}]}},{"fieldName":"main_language","fieldLabel":"Programming Language","initialValueFromOther":"info.programming_language.main_language","type":"dropdown","size":3,"dataFrom":{"value":[{"value":"python","label":"Python","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/python.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"javascript","label":"Javascript","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/js.png","imgStyle":{"maxWidth":"20px","height":"auto"}}]}},{"fieldName":"framework","fieldLabel":"Framework","initialValueFromOther":"info.programming_language.framework","type":"dropdown","size":3,"dataFrom":{"value":[{"value":"flask","label":"Flask","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/flask.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"react","label":"React","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/react.png","imgStyle":{"maxWidth":"20px","height":"auto"}},{"value":"angular","label":"Angular","img":"https://res.cloudinary.com/insaba/image/upload/v1697789863/app/angular.png","imgStyle":{"maxWidth":"20px","height":"auto"}}]}},{"fieldName":"primaryColor","fieldLabel":"App Primary Color","size":2,"type":"color_picker","initialValueFromOther":"setting.primaryColor"},{"fieldName":"skin","fieldLabel":"Default Skin","initialValueFromOther":"setting.skin","type":"dropdown","size":2,"dataFrom":{"value":[{"value":"light","label":"Light"},{"value":"dark","label":"Dark"},{"value":"semi-dark","label":"Semi Dark"},{"value":"bordered","label":"Bordered"}]}},{"fieldName":"navbarType","fieldLabel":"Default Navbar Type","initialValueFromOther":"setting.navbarType","type":"dropdown","size":2,"dataFrom":{"value":[{"value":"floating","label":"Floating"},{"value":"sticky","label":"Sticky"},{"value":"static","label":"Static"},{"value":"hidden","label":"Hidden"}]}},{"fieldName":"navbar","fieldLabel":"Default Navbar Color","size":2,"type":"color_picker","initialValueFromOther":"setting.navbar"},{"fieldName":"footer","fieldLabel":"Default Footer Type","initialValueFromOther":"setting.footer","type":"dropdown","size":2,"dataFrom":{"value":[{"value":"sticky","label":"Sticky"},{"value":"static","label":"Static"},{"value":"hidden","label":"Hidden"}]}},{"fieldName":"description","type":"textarea","size":8,"initialValueFromOther":"info.description"},{"type":"column","fieldLabel":"Logo","size":12,"icon":"material:image","cardOpt":{"color":"light-info","className":{"card":"","cardBody":"","cardTitle":""},"style":{"card":{"borderStyle":"dashed"},"cardBody":{},"cardTitle":{}}},"children":[{"fieldName":"appLogo","fieldLabel":"App Logo","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":3,"initialValueFromOther":"logo.appLogo"},{"fieldName":"favicon","fieldLabel":"Fav-Icon","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":3,"initialValueFromOther":"logo.favicon","fieldDesc":"16x16 pixels: This is a common size for favicons and is widely supported by most browsers and platforms"},{"fieldName":"appLogoLoginBig","fieldLabel":"App Logo And Text","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":3,"initialValueFromOther":"logo.appLogoLoginBig","fieldDesc":"Will be displayed as an application loader"},{"fieldName":"appLogoText","fieldLabel":"App Logo Text","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":3,"initialValueFromOther":"logo.appLogoText","fieldDesc":"Main menu header image will be displayed with this image"}]},{"type":"separator","size":12,"fieldLabel":"Login Page Setting","icon":"material:view_quilt","className":"divider-start divider-dashed","hideOnPage":{"edit":false,"view":true}},{"type":"column","size":7,"children":[{"fieldName":"login_text_title","fieldLabel":"Greeting Title Text","type":"textarea","size":12,"initialValueFromOther":"setting.login_text_title","fieldDesc":"if not present, the default text will be displayed"},{"fieldName":"login_text_subtitle","fieldLabel":"Greeting Subtitle Text","type":"textarea","size":12,"initialValueFromOther":"setting.login_text_subtitle","fieldDesc":"if not present, the default text will be displayed"}]},{"type":"column","size":5,"children":[{"fieldName":"login_no_appLogo","fieldLabel":"Hide App Logo ?","fieldDesc":"Hide App Logo on Login","size":6,"type":"radio","initialValueFromOther":"setting.login_no_appLogo","dataFrom":{"value":[{"value":"true","label":"Yes","color":"success"},{"value":"false","label":"No","color":"danger"}]}},{"fieldName":"login_hide_input","fieldLabel":"Hide Login Input ?","fieldDesc":"Hide Form input Login","size":6,"type":"radio","initialValueFromOther":"setting.login_hide_input","dataFrom":{"value":[{"value":"true","label":"Yes","color":"success"},{"value":"false","label":"No","color":"danger"}]}},{"fieldName":"login_hide_image","fieldLabel":"Hide Main Image ?","size":6,"type":"radio","initialValueFromOther":"setting.login_hide_image","dataFrom":{"value":[{"value":true,"label":"Yes","color":"success"},{"value":false,"label":"No","color":"danger"}]}},{"fieldName":"login_unit_name_color","fieldLabel":"Unit Name Color","size":6,"type":"color_picker","initialValueFromOther":"setting.login_unit_name_color"}]},{"type":"column","size":10,"children":[{"fieldName":"login_img","fieldLabel":"Login Main Image","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":4,"initialValueFromOther":"logo.login_img"},{"fieldName":"background_img","fieldLabel":"Login Background Image","type":"file_image","previewStyle":{"backgroundSize":"contain"},"size":4,"initialValueFromOther":"logo.background_img"},{"fieldName":"background_video","fieldLabel":"Login Background Video","type":"youtube","previewStyle":{"backgroundSize":"contain"},"size":4,"initialValueFromOther":"setting.background_video","fieldDesc":"Login background image will be overwritten."}]},{"type":"column","size":2,"children":[{"fieldName":"background_img_overlay","fieldLabel":"Background Image Overlay","size":12,"type":"color_picker","initialValueFromOther":"setting.background_img_overlay"},{"fieldName":"background_video_overlay","fieldLabel":"Background Video Overlay","size":12,"type":"color_picker","initialValueFromOther":"setting.background_video_overlay"}]},{"type":"column","size":6,"children":[{"fieldName":"login_card_style","code_language":"json","fieldLabel":"Login Card Style (React Styles)","type":"code_editor","fromObject":true,"toObject":true,"size":12,"initialValueFromOther":"setting.login_card_style"},{"fieldName":"login_text_title_style","code_language":"json","fieldLabel":"Login Greeting Style (React Styles)","type":"code_editor","fromObject":true,"toObject":true,"size":12,"initialValueFromOther":"setting.login_text_title_style"},{"fieldName":"login_alert_static","initialValueFromOther":"setting.login_alert_static","fieldLabel":"Login Alert Static Information","type":"code_editor","code_language":"html","fromObject":true,"toObject":true,"size":12},{"fieldName":"login_alert_static_as_modal","fieldLabel":"Login Alert as Modal ?","size":6,"type":"radio","initialValueFromOther":"setting.login_alert_static_as_modal","dataFrom":{"value":[{"value":"true","label":"Yes","color":"success"},{"value":"false","label":"No","color":"danger"}]}},{"fieldName":"login_alert_static_collapsed","fieldLabel":"Login Alert Collapsed ?","size":6,"type":"radio","initialValueFromOther":"setting.login_alert_static_collapsed","dataFrom":{"value":[{"value":"true","label":"Yes","color":"success"},{"value":"false","label":"No","color":"danger"}]}}]},{"type":"column","size":6,"children":[{"fieldName":"login_flash_buttons","code_language":"json","multipleData":true,"fieldLabel":"Login Flash Buttons","type":"code_editor","fromObject":true,"toObject":true,"size":12,"initialValueFromOther":"setting.login_flash_buttons"}]}]}}}')}}]);
//# sourceMappingURL=103.784ac0bc.chunk.js.map