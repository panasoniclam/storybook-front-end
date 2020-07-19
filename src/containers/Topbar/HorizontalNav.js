import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import {NAV_STYLE_MINI, THEME_TYPE_LITE} from "constants/ThemeSetting";


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HorizontalNav extends Component {

  render() {
    const {themeType, pathname} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Menu
        defaultOpenKeys={[defaultOpenKeys]}
        selectedKeys={[selectedKeys]}
        mode="horizontal">

        <SubMenu key="main" title={
          <IntlMessages id="sidebar.main"/>}>

          <SubMenu key="dashboard" className="gx-menu-horizontal"
                   title={<span> <i className="icon icon-dasbhoard"/>
                         <IntlMessages id="sidebar.dashboard"/></span>}>
            <Menu.Item key="main/dashboard/crm">
              <Link to="/main/dashboard/crm">
                <i className="icon icon-crm"/>
                <IntlMessages id="sidebar.dashboard.crm"/>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="main/widgets">
            <Link to="/main/widgets"><i className="icon icon-widgets"/>
              <IntlMessages id="sidebar.widgets"/></Link>
          </Menu.Item>
          <Menu.Item key="main/metrics">
            <Link to="/main/metrics"><i className="icon icon-area-chart"/>
              <IntlMessages id="sidebar.metrics"/></Link>
          </Menu.Item>

        </SubMenu>

        <SubMenu key="components" title={<IntlMessages
          id="sidebar.components"/>}>

          <SubMenu key="general" title={
            <span>
                  <i className="icon icon-all-contacts"/>

                    <IntlMessages id="sidebar.components.general"/>

              </span>}>
            <Menu.Item key="components/general/button">
              <Link to="/components/general/button">
                <i className="icon icon-button"/>
                <IntlMessages id="sidebar.general.button"/>
              </Link>
            </Menu.Item>
            <Menu.Item key="components/general/icon">
              <Link to="/components/general/icon">
                <i className="icon icon-icon"/>
                <IntlMessages id="sidebar.general.icon"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="navigation" title={
            <span>
                  <i className="icon icon-navigation"/>

                    <IntlMessages id="sidebar.components.navigation"/>

              </span>}>
            <Menu.Item key="components/navigation/affix">
              <Link to="/components/navigation/affix">
                <i className="icon icon-affix"/>
                <IntlMessages
                  id="sidebar.navigation.affix"/></Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/breadcrumb">
              <Link to="/components/navigation/breadcrumb">
                <i className="icon icon-breadcrumb"/>
                <IntlMessages
                  id="sidebar.navigation.breadcrumb"/></Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/dropdown">
              <Link to="/components/navigation/dropdown">
                <i className="icon icon-dropdown"/>
                <IntlMessages
                  id="sidebar.navigation.dropdown"/></Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/menu">
              <Link to="/components/navigation/menu">
                <i className="icon icon-menu"/>
                <IntlMessages
                  id="sidebar.navigation.menu"/></Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/pagination">
              <Link to="/components/navigation/pagination">
                <i className="icon icon-pagination"/>
                <IntlMessages
                  id="sidebar.navigation.pagination"/></Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/steps">
              <Link to="/components/navigation/steps">
                <i className="icon icon-steps"/>
                <IntlMessages
                  id="sidebar.navigation.steps"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="dataEntry" title={
            <span>
                  <i className="icon icon-data-entry"/>

                    <IntlMessages id="sidebar.components.dataEntry"/>

              </span>}>
            <Menu.Item key="components/dataEntry/autoComplete">
              <Link to="/components/dataEntry/autoComplete">
                <i className="icon icon-autocomplete"/>
                <IntlMessages
                  id="sidebar.dataEntry.autoComplete"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/checkbox">
              <Link to="/components/dataEntry/checkbox">
                <i className="icon icon-check-square-o"/>
                <IntlMessages
                  id="sidebar.dataEntry.checkbox"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/cascader">
              <Link to="/components/dataEntry/cascader">
                <i className="icon icon-cascader"/>
                <IntlMessages
                  id="sidebar.dataEntry.cascader"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/datePicker">
              <Link to="/components/dataEntry/datePicker">
                <i className="icon icon-datepicker"/>
                <IntlMessages
                  id="sidebar.dataEntry.datePicker"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/form">
              <Link to="/components/dataEntry/form">
                <i className="icon icon-editor"/>
                <IntlMessages
                  id="sidebar.dataEntry.form"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/inputNumber">
              <Link to="/components/dataEntry/inputNumber">
                <i className="icon icon-inputnumber"/>
                <IntlMessages
                  id="sidebar.dataEntry.inputNumber"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/input">
              <Link to="/components/dataEntry/input">
                <i className="icon icon-input"/>
                <IntlMessages
                  id="sidebar.dataEntry.input"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/mention">
              <Link to="/components/dataEntry/mention">
                <i className="icon icon-mention"/>
                <IntlMessages
                  id="sidebar.dataEntry.mention"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/rate">
              <Link to="/components/dataEntry/rate">
                <i className="icon icon-star"/>
                <IntlMessages
                  id="sidebar.dataEntry.rate"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/radio">
              <Link to="/components/dataEntry/radio">
                <i className="icon icon-radiobutton"/>
                <IntlMessages
                  id="sidebar.dataEntry.radio"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/switch">
              <Link to="/components/dataEntry/switch">
                <i className="icon icon-switch"/>
                <IntlMessages
                  id="sidebar.dataEntry.switch"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/slider">
              <Link to="/components/dataEntry/slider">
                <i className="icon icon-slider"/>
                <IntlMessages
                  id="sidebar.dataEntry.slider"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/select">
              <Link to="/components/dataEntry/select">
                <i className="icon icon-select"/>
                <IntlMessages
                  id="sidebar.dataEntry.select"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/treeSelect">
              <Link to="/components/dataEntry/treeSelect">
                <i className="icon icon-treeselect"/>
                <IntlMessages
                  id="sidebar.dataEntry.treeSelect"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/transfer">
              <Link to="/components/dataEntry/transfer">
                <i className="icon icon-transfer"/>
                <IntlMessages
                  id="sidebar.dataEntry.transfer"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/timePicker">
              <Link to="/components/dataEntry/timePicker">
                <i className="icon icon-timepicker"/>
                <IntlMessages
                  id="sidebar.dataEntry.timePicker"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/upload">
              <Link to="/components/dataEntry/upload">
                <i className="icon icon-upload"/>
                <IntlMessages
                  id="sidebar.dataEntry.upload"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="dataDisplay" title={
            <span>
                  <i className="icon icon-data-display"/>

                    <IntlMessages id="sidebar.components.dataDisplay"/>

              </span>}>
            <Menu.Item key="components/dataDisplay/avatar">
              <Link to="/components/dataDisplay/avatar">
                <i className="icon icon-avatar"/>
                <IntlMessages
                  id="sidebar.dataDisplay.avatar"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/badge">
              <Link to="/components/dataDisplay/badge">
                <i className="icon icon-badge"/>
                <IntlMessages
                  id="sidebar.dataDisplay.badge"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/collapse">
              <Link to="/components/dataDisplay/collapse">
                <i className="icon icon-collapse"/>
                <IntlMessages
                  id="sidebar.dataDisplay.collapse"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/carousel">
              <Link to="/components/dataDisplay/carousel">
                <i className="icon icon-carousel"/>
                <IntlMessages
                  id="sidebar.dataDisplay.carousel"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/card">
              <Link to="/components/dataDisplay/card">
                <i className="icon icon-card"/>
                <IntlMessages
                  id="sidebar.dataDisplay.card"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/calendar">
              <Link to="/components/dataDisplay/calendar">
                <i className="icon icon-calendar"/>
                <IntlMessages
                  id="sidebar.dataDisplay.calender"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/list">
              <Link to="/components/dataDisplay/list">
                <i className="icon icon-all-contacts"/>
                <IntlMessages
                  id="sidebar.dataDisplay.list"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/popover">
              <Link to="/components/dataDisplay/popover">
                <i className="icon icon-popover"/>
                <IntlMessages
                  id="sidebar.dataDisplay.popover"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/tree">
              <Link to="/components/dataDisplay/tree">
                <i className="icon icon-tree"/>
                <IntlMessages
                  id="sidebar.dataDisplay.tree"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/tooltip">
              <Link to="/components/dataDisplay/tooltip">
                <i className="icon icon-tooltip"/>
                <IntlMessages
                  id="sidebar.dataDisplay.toolTips"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/timeline">
              <Link to="/components/dataDisplay/timeline">
                <i className="icon icon-timeline"/>
                <IntlMessages
                  id="sidebar.dataDisplay.timeLine"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/tag">
              <Link to="/components/dataDisplay/tag">
                <i className="icon icon-tag"/>
                <IntlMessages
                  id="sidebar.dataDisplay.tag"/></Link>
            </Menu.Item>
            <Menu.Item key="components/dataDisplay/tabs">
              <Link to="/components/dataDisplay/tabs">
                <i className="icon icon-tab"/>
                <IntlMessages
                  id="sidebar.dataDisplay.tabs"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="feedBack" title={
            <span>
                  <i className="icon icon-feedback"/>

                    <IntlMessages id="sidebar.components.feedBack"/>

              </span>}>
            <Menu.Item key="components/feedBack/alert">
              <Link to="/components/feedBack/alert">
                <i className="icon icon-alert"/>
                <IntlMessages
                  id="sidebar.feedBack.alert"/></Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/modal">
              <Link to="/components/feedBack/modal">
                <i className="icon icon-modal"/>
                <IntlMessages
                  id="sidebar.feedBack.modal"/></Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/message">
              <Link to="/components/feedBack/message">
                <i className="icon icon-message"/>
                <IntlMessages
                  id="sidebar.feedBack.message"/></Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/notification">
              <Link to="/components/feedBack/notification">
                <i className="icon icon-notification-new"/>
                <IntlMessages
                  id="sidebar.feedBack.notification"/></Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/progress">
              <Link to="/components/feedBack/progress">
                <i className="icon icon-progress"/>
                <IntlMessages
                  id="sidebar.feedBack.progress"/></Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/popconfirm">
              <Link to="/components/feedBack/popconfirm">

                <i className="icon icon-popconfirm"/>
                <IntlMessages id="sidebar.feedBack.popConfirm"/>

              </Link>
            </Menu.Item>
            <Menu.Item key="components/feedBack/spin">
              <Link to="/components/feedBack/spin">
                <i className="icon icon-spin"/>
                <IntlMessages
                  id="sidebar.feedBack.spin"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="others" title={
            <span>
                  <i className="icon icon-inbox"/>

                    <IntlMessages id="sidebar.components.other"/>

              </span>}>
            <Menu.Item key="components/others/anchor">
              <Link to="/components/others/anchor">
                <i className="icon icon-anchor"/>
                <IntlMessages
                  id="sidebar.other.anchor"/></Link>
            </Menu.Item>
            <Menu.Item key="components/others/backtop">
              <Link to="/components/others/backtop">
                <i className="icon icon-backtop"/>
                <IntlMessages
                  id="sidebar.other.backTop"/></Link>
            </Menu.Item>
            <Menu.Item key="components/others/divider">
              <Link to="/components/others/divider">
                <i className="icon icon-divider"/>
                <IntlMessages
                  id="sidebar.other.divider"/></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="table"
                   title={
                     <span>
                           <i className="icon icon-table"/>

                             <IntlMessages id="sidebar.dataDisplay.table"/>

                         </span>}>
            <Menu.Item key="components/table/basic">
              <Link to="/components/table/basic">
                <i className="icon icon-table-general"/>
                <IntlMessages
                  id="sidebar.view.basicTable"/></Link>
            </Menu.Item>
            <Menu.Item key="components/table/data">
              <Link to="/components/table/data">
                <i className="icon icon-table-data"/>
                <IntlMessages
                  id="sidebar.view.dataTable"/></Link>
            </Menu.Item>
          </SubMenu>

        </SubMenu>

        <SubMenu key="extraComponents" title={
          <IntlMessages id="sidebar.extraComponents"/>
        }>

          <SubMenu key="editor"
                   title={<span>
                         <i className="icon icon-editor"/>
                        <IntlMessages id="sidebar.editors"/>
                       </span>}>
            <Menu.Item key="extra-components/editor/ck">
              <Link to="/extra-components/editor/ck">
                <i className="icon icon-ckeditor"/>
                <IntlMessages
                  id="sidebar.editors.CKEditor"/></Link>
            </Menu.Item>
            <Menu.Item key="extra-components/editor/wysiswyg">
              <Link to="/extra-components/editor/wysiswyg">
                <i className="icon icon-wysiwyg"/>
                <IntlMessages
                  id="sidebar.editors.WYSISWYGEditor"/></Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="extra-components/color-picker">
            <Link to="/extra-components/color-picker">
              <i className="icon icon-picker"/>

              <IntlMessages id="sidebar.pickers.colorPickers"/>

            </Link>
          </Menu.Item>

          <Menu.Item key="extra-components/dnd">
            <Link to="/extra-components/dnd">
              <i className="icon icon-drag-and-drop"/>

              <IntlMessages id="sidebar.extensions.dragNDrop"/>

            </Link>
          </Menu.Item>
          <Menu.Item key="extra-components/sweet-alert">
            <Link to="/extra-components/sweet-alert">
              <i className="icon icon-sweet-alert"/>

              <IntlMessages id="sidebar.extensions.sweetAlert"/>

            </Link>
          </Menu.Item>
          <Menu.Item key="extra-components/notification">
            <Link to="/extra-components/notification"><i className="icon icon-notification"/>
              <IntlMessages
                id="sidebar.extensions.notification"/></Link>
          </Menu.Item>

          <SubMenu key="time-line"
                   title={<span><i className="icon icon-timeline"/><IntlMessages
                     id="sidebar.timeLine"/></span>}>
            <Menu.Item key="extra-components/time-line/default">
              <Link to="/extra-components/time-line/default">
                <i className="icon icon-timeline-new"/>
                <IntlMessages
                  id="sidebar.timeLine.default"/></Link>
            </Menu.Item>
            <Menu.Item key="extra-components/time-line/default-with-icon">
              <Link to="/extra-components/time-line/default-with-icon">
                <i className="icon icon-timeline-with-icons"/>
                <IntlMessages
                  id="sidebar.timeLine.defaultwithIcons"/></Link>
            </Menu.Item>
            <Menu.Item key="extra-components/time-line/left-align">
              <Link to="/extra-components/time-line/left-align">
                <i className="icon icon-timeline-left-align"/>
                <IntlMessages
                  id="sidebar.timeLine.leftAligned"/></Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>


        <SubMenu key="custom-views"
                       title={

                         <IntlMessages id="sidebar.customViews"/>
                       }>

          <SubMenu key="map"
                   title={
                     <span>
                           <i className="icon icon-map-google"/>
                           <IntlMessages
                             id="sidebar.map"/>

                       </span>}>
            <Menu.Item key="extensions/map/simple">
              <Link to="/extensions/map/simple">
                <i className="icon icon-map-drawing"/>
                <IntlMessages
                  id="sidebar.map.simple"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/styled">
              <Link to="/extensions/map/styled">
                <i className="icon icon-map-styled"/>
                <IntlMessages
                  id="sidebar.map.styled"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/geo-location">
              <Link to="/extensions/map/geo-location">
                <i className="icon icon-map-geo-location"/>
                <IntlMessages
                  id="sidebar.map.geoLocation"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/directions">
              <Link to="/extensions/map/directions">
                <i className="icon icon-map-directions"/>
                <IntlMessages
                  id="sidebar.map.mapDirection"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/overlay">
              <Link to="/extensions/map/overlay">
                <i className="icon icon-map-overlay"/>
                <IntlMessages
                  id="sidebar.map.overlay"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/kml">
              <Link to="/extensions/map/kml">
                <i className="icon icon-map-km-layer"/>
                <IntlMessages
                  id="sidebar.map.kmLayer"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/popup-info">
              <Link to="/extensions/map/popup-info">
                <i className="icon icon-map-popup-info"/>
                <IntlMessages
                  id="sidebar.map.popupInfo"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/traffic">
              <Link to="/extensions/map/traffic">
                <i className="icon icon-map-traffic-layer"/>
                <IntlMessages
                  id="sidebar.map.trafficLayer"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/street-view">
              <Link to="/extensions/map/street-view">
                <i className="icon icon-map-street-view"/>
                <IntlMessages
                  id="sidebar.map.streetView"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/event">
              <Link to="/extensions/map/event">
                <i className="icon icon-map-event-listener"/>
                <IntlMessages
                  id="sidebar.map.eventListener"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/drawing">
              <Link to="/extensions/map/drawing">
                <i className="icon icon-map-drawing"/>
                <IntlMessages
                  id="sidebar.map.mapDrawing"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/map/clustering">
              <Link to="/extensions/map/clustering">
                <i className="icon icon-map-clustering"/>
                <IntlMessages
                  id="sidebar.map.mapClustering"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="chart"
                   title={<span><i className="icon icon-area-chart"/><IntlMessages
                     id="sidebar.chart"/></span>}>
            <Menu.Item key="extensions/chart/area">
              <Link to="/extensions/chart/area">
                <i className="icon icon-chart-area"/>
                <IntlMessages
                  id="sidebar.chart.area"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/bar">
              <Link to="/extensions/chart/bar">
                <i className="icon icon-chart-bar"/>
                <IntlMessages
                  id="sidebar.chart.bar"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/composed">
              <Link to="/extensions/chart/composed">
                <i className="icon icon-chart-composed"/>
                <IntlMessages
                  id="sidebar.chart.composed"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/line">
              <Link to="/extensions/chart/line">
                <i className="icon icon-chart-line"/>
                <IntlMessages
                  id="sidebar.chart.line"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/pie">
              <Link to="/extensions/chart/pie">
                <i className="icon icon-chart-pie"/>
                <IntlMessages
                  id="sidebar.chart.pie"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/radar">
              <Link to="/extensions/chart/radar">
                <i className="icon icon-chart-radar"/>
                <IntlMessages
                  id="sidebar.chart.radar"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/radial">
              <Link to="/extensions/chart/radial">
                <i className="icon icon-chart-radial"/>
                <IntlMessages
                  id="sidebar.chart.radial"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/scatter">
              <Link to="/extensions/chart/scatter">
                <i className="icon icon-chart-scatter"/>
                <IntlMessages
                  id="sidebar.chart.scatter"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/chart/treemap">
              <Link to="/extensions/chart/treemap">
                <i className="icon icon-chart-tree"/>
                <IntlMessages
                  id="sidebar.chart.tree"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="calendar"
                   title={<span><i className="icon icon-calendar"/><IntlMessages
                     id="sidebar.calendar"/></span>}>
            <Menu.Item key="extensions/calendar/basic">
              <Link to="/extensions/calendar/basic">
                <i className="icon icon-calendar-basic"/>
                <IntlMessages
                  id="sidebar.calendar.basic"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/calendar/cultures">
              <Link to="/extensions/calendar/cultures">
                <i className="icon icon-calendar-culture"/>
                <IntlMessages
                  id="sidebar.calendar.cultures"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/calendar/popup">
              <Link to="/extensions/calendar/popup">
                <i className="icon icon-calendar-popup"/>
                <IntlMessages
                  id="sidebar.calendar.popup"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/calendar/rendering">
              <Link to="/extensions/calendar/rendering">
                <i className="icon icon-calendar-rendering"/>
                <IntlMessages
                  id="sidebar.calendar.rendering"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/calendar/selectable">
              <Link to="/extensions/calendar/selectable">
                <i className="icon icon-calendar-selectable"/>
                <IntlMessages
                  id="sidebar.calendar.selectable"/></Link>
            </Menu.Item>
            <Menu.Item key="extensions/calendar/timeslots">
              <Link to="/extensions/calendar/timeslots">
                <i className="icon icon-schedule"/>
                <IntlMessages
                  id="sidebar.calendar.timeslots"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="user-auth"
                   title={<span><i className="icon icon-auth-screen"/><IntlMessages
                     id="app.userAuth"/></span>}>
            <Menu.Item key="custom-views/user-auth/sign-in">
              <Link to="/custom-views/user-auth/sign-in">
                <i className="icon icon-signin"/>
                <IntlMessages
                  id="app.userAuth.signIn"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/user-auth/forgot-password">
              <Link to="/custom-views/user-auth/forgot-password">
                <i className="icon icon-forgot-password"/>
                <IntlMessages
                  id="app.userAuth.forgotPassword"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/user-auth/sign-up">
              <Link to="/custom-views/user-auth/sign-up">
                <i className="icon icon-signup"/>
                <IntlMessages
                  id="app.userAuth.signUp"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/user-auth/lock-screen">
              <Link to="/custom-views/user-auth/lock-screen">
                <i className="icon icon-lock-screen"/>
                <IntlMessages
                  id="app.userAuth.lockScreen"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/user-auth/reset-password">
              <Link to="/custom-views/user-auth/reset-password">
                <i className="icon icon-reset-password"/>
                <IntlMessages
                  id="app.userAuth.resetPassword"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="list-type"
                   title={<span><i className="icon icon-all-contacts"/><IntlMessages
                     id="sidebar.listType"/></span>}>
            <Menu.Item key="custom-views/list-type/simple-list">
              <Link to="/custom-views/list-type/simple-list">
                <i className="icon icon-plain-list-view"/>
                <IntlMessages
                  id="sidebar.listType.plainListView"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/list-type/strip-list">
              <Link to="/custom-views/list-type/strip-list">
                <i className="icon icon-plain-list-divider"/>
                <IntlMessages
                  id="sidebar.listType.withDivider"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/list-type/card-list">
              <Link to="/custom-views/list-type/card-list">
                <i className="icon icon-cards-list-view"/>
                <IntlMessages
                  id="sidebar.listType.cardListView"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="eCommerce"
                   title={<span><i className="icon icon-shopping-cart"/><IntlMessages
                     id="sidebar.eCommerce"/></span>}>
            <Menu.Item key="custom-views/eCommerce/product-grid">
              <Link to="/custom-views/eCommerce/product-grid">
                <i className="icon icon-product-grid"/>
                <IntlMessages
                  id="sidebar.eCommerce.productGrid"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/eCommerce/product-list">
              <Link to="/custom-views/eCommerce/product-list">
                <i className="icon icon-product-list"/>
                <IntlMessages
                  id="sidebar.eCommerce.productList"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="errorPages"
                   title={<span><i className="icon icon-error"/><IntlMessages
                     id="sidebar.extraPages"/></span>}>

            <Menu.Item key="custom-views/error-pages/error-404">
              <Link to="/custom-views/error-pages/error-404">
                <i className="icon icon-error-404"/>
                <IntlMessages
                  id="sidebar.extraPages.404"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/error-pages/error-500">
              <Link to="/custom-views/error-pages/error-500">
                <i className="icon icon-error-500"/>
                <IntlMessages
                  id="sidebar.extraPages.500"/></Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="extra-elements"
                   title={<span><i className="icon icon-ellipse-h"/><IntlMessages
                     id="sidebar.listType.extras"/></span>}>
            <Menu.Item key="custom-views/extras/pricing-table">
              <Link to="/custom-views/extras/pricing-table">
                <i className="icon icon-pricing-table"/>
                <IntlMessages
                  id="sidebar.extraElements.pricingTable"/></Link>
            </Menu.Item>

            <Menu.Item key="custom-views/extras/callouts">
              <Link to="/custom-views/extras/callouts">
                <i className="icon icon-callout"/>
                <IntlMessages
                  id="sidebar.extraElements.callouts"/></Link>
            </Menu.Item>
            <Menu.Item key="custom-views/extras/testimonials">
              <Link to="/custom-views/extras/testimonials">
                <i className="icon icon-testimonial"/>
                <IntlMessages
                  id="sidebar.extraElements.testimonials"/></Link>
            </Menu.Item>
          </SubMenu>

        </SubMenu>

        <SubMenu key="in-built-apps"
                       title={
                         <IntlMessages id="sidebar.inBuiltApp"/>
                       }>

          <Menu.Item key="in-built-apps/mail">
            <Link to="/in-built-apps/mail"><i className="icon icon-email"/><IntlMessages
              id="sidebar.mailApp"/></Link>
          </Menu.Item>

          <Menu.Item key="in-built-apps/todo">
            <Link to="/in-built-apps/todo"><i
              className="icon icon-check-square-o"/><IntlMessages
              id="sidebar.todoApp"/></Link>
          </Menu.Item>

          <Menu.Item key="in-built-apps/contacts">
            <Link to="/in-built-apps/contacts"><i className="icon icon-contacts"/><IntlMessages
              id="sidebar.contactsApp"/></Link>
          </Menu.Item>

          <Menu.Item key="in-built-apps/chat">
            <Link to="/in-built-apps/chat"><i className="icon icon-chat-bubble -flex-column-reverse"/><IntlMessages
              id="sidebar.chatApp"/></Link>
          </Menu.Item>

        </SubMenu>

      </Menu>
    );
  }
}

HorizontalNav.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {themeType, pathname} = settings;
  return {themeType, pathname}
};
export default connect(mapStateToProps)(HorizontalNav);

