export default ({children}) => {
    return (
        <>
            <NavBar></NavBar>
            <div className="main-container" id="container">

                <div className="overlay"></div>
                <div className="search-overlay"></div>

                <SideBar />
                
                {/* BEGIN CONTENT AREA */}
                <div id="content" className="main-content">
                    <div className="layout-px-spacing">
                        <div className="row layout-top-spacing">
                            <div className="col-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                {/* END CONTENT AREA */}
            </div>
        </>
    )
}

const NavBar = () => {
    return (
        <div className="header-container fixed-top">
            <header className="header navbar navbar-expand-sm">
                
                <ul className="navbar-nav theme-brand flex-row  text-center">
                    <li className="nav-item theme-logo">
                        <a href="index.html">
                            {/* <img src="../assets/assets/img/90x90.jpg" className="navbar-logo" alt="logo" /> */}
                        </a>
                    </li>
                    <li className="nav-item theme-text">
                        <a href="index.html" className="nav-link"> CORK </a>
                    </li>
                    <li className="nav-item toggle-sidebar">
                        <a className="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg></a>
                    </li>
                </ul>

                <ul className="navbar-item flex-row navbar-dropdown">
                    <li className="nav-item dropdown apps-dropdown more-dropdown md-hidden">
                        <div className="dropdown  custom-dropdown-icon">
                            <a className="dropdown-toggle btn" href="#" role="button" id="appSection" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg><span>Apps</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="appSection">
                                <a className="dropdown-item" data-value="Chat" href="apps_chat.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Chat</a>
                                <a className="dropdown-item" data-value="Mailbox" href="apps_mailbox.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Mailbox</a>
                                <a className="dropdown-item" data-value="Todo" href="apps_todoList.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Todo List</a>
                                <a className="dropdown-item" data-value="Notes" href="apps_notes.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Notes</a>
                                <a className="dropdown-item" data-value="Scrumboard" href="apps_scrumboard.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> Scrumboard</a>
                                <a className="dropdown-item" data-value="Contacts" href="apps_contacts.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Contacts</a>
                                <div className="dropdown-item-collapsable">
                                    <a className="dropdown-item" data-value="Invoice" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> Invoice <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </a>
                                    <div className="collapse" id="collapseExample">
                                        <ul>
                                            <li>
                                                <a data-value="Invoice List" href="apps_invoice-list.html"> List </a>
                                            </li>
                                            <li>
                                                <a data-value="Invoice Preview" href="apps_invoice-preview.html"> Preview </a>
                                            </li>
                                            <li>
                                                <a data-value="Invoice Add" href="apps_invoice-add.html"> Add </a>
                                            </li>
                                            <li>
                                                <a data-value="Invoice Edit" href="apps_invoice-edit.html"> Edit </a>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>                            
                                <a className="dropdown-item" data-value="Calendar" href="apps_calendar.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Calendar</a>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="navbar-item flex-row search-ul">
                    <li className="nav-item align-self-center search-animated">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <form className="form-inline search-full form-inline search" role="search">
                            <div className="search-bar">
                                <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
                            </div>
                        </form>
                    </li>
                </ul>
                <ul className="navbar-item flex-row navbar-dropdown">
                    <li className="nav-item dropdown language-dropdown more-dropdown">
                        <div className="dropdown  custom-dropdown-icon">
                            {/* <a className="dropdown-toggle btn" href="#" role="button" id="langDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/assets/img/ca.png" className="flag-width" alt="flag" /><span>English</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a> */}

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="langDropdown">
                                {/* <a className="dropdown-item" data-img-value="de" data-value="German"><img src="../assets/assets/img/de.png" className="flag-width" alt="flag" /> German</a> */}
                                {/* <a className="dropdown-item" data-img-value="jp" data-value="Japanese"><img src="../assets/assets/img/jp.png" className="flag-width" alt="flag" /> Japanese</a> */}
                                {/* <a className="dropdown-item" data-img-value="fr" data-value="French"><img src="../assets/assets/img/fr.png" className="flag-width" alt="flag" /> French</a> */}
                                {/* <a className="dropdown-item" data-img-value="ca" data-value="English"><img src="../assets/assets/img/ca.png" className="flag-width" alt="flag" /> English</a> */}
                            </div>
                        </div>
                    </li>
                    
                    <li className="nav-item dropdown message-dropdown">
                        <a className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span className="badge badge-primary"></span>
                        </a>
                        <div className="dropdown-menu p-0 position-absolute" aria-labelledby="messageDropdown">
                            <div className="">
                                <a className="dropdown-item">
                                    <div className="">

                                        <div className="media">
                                            <div className="user-img">
                                                <div className="avatar avatar-xl">
                                                    <span className="avatar-title rounded-circle">KY</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div className="">
                                                    <h5 className="usr-name">Kara Young</h5>
                                                    <p className="msg-title">ACCOUNT UPDATE</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="">
                                        <div className="media">
                                            <div className="user-img">
                                                <div className="avatar avatar-xl">
                                                    <span className="avatar-title rounded-circle">DA</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div className="">
                                                    <h5 className="usr-name">Daisy Anderson</h5>
                                                    <p className="msg-title">ACCOUNT UPDATE</p>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="">

                                        <div className="media">
                                            <div className="user-img">
                                                <div className="avatar avatar-xl">
                                                    <span className="avatar-title rounded-circle">OG</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div className="">
                                                    <h5 className="usr-name">Oscar Garner</h5>
                                                    <p className="msg-title">ACCOUNT UPDATE</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown notification-dropdown">
                        <a className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge badge-success"></span>
                        </a>
                        <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
                            <div className="notification-scroll">

                                <div className="dropdown-item">
                                    <div className="media server-log">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                                        <div className="media-body">
                                            <div className="data-info">
                                                <h6 className="">Server Rebooted</h6>
                                                <p className="">45 min ago</p>
                                            </div>

                                            <div className="icon-status">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown-item">
                                    <div className="media ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        <div className="media-body">
                                            <div className="data-info">
                                                <h6 className="">Licence Expiring Soon</h6>
                                                <p className="">8 hrs ago</p>
                                            </div>

                                            <div className="icon-status">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown-item">
                                    <div className="media file-upload">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        <div className="media-body">
                                            <div className="data-info">
                                                <h6 className="">Kelly Portfolio.pdf</h6>
                                                <p className="">670 kb</p>
                                            </div>

                                            <div className="icon-status">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
                        <a className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </a>
                        <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                            <div className="user-profile-section">
                                <div className="media mx-auto">
                                    {/* <img src="../assets/assets/img/90x90.jpg" className="img-fluid mr-2" alt="avatar" /> */}
                                    <div className="media-body">
                                        <h5>Sonia Shaw</h5>
                                        <p>Project Leader</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <a href="user_profile.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span>My Profile</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="apps_mailbox.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> <span>My Inbox</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_lockscreen.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> <span>Lock Screen</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_login.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> <span>Log Out</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
    )
}

const SideBar = () => {
    return (
        <>
            {/* BEGIN SIDEBAR */}
            <div className="sidebar-wrapper sidebar-theme">
                <nav id="sidebar">
                    <div className="profile-info">
                        <figure className="user-cover-image"></figure>
                        <div className="user-info">
                            <img src="assets/img/90x90.jpg" alt="avatar" />
                            <h6 className="">Susan Phillips</h6>
                            <p className="">Web Developer</p>
                        </div>
                    </div>
                    <div className="shadow-bottom"></div>
                    <ul className="list-unstyled menu-categories" id="accordionExample">
                        <li className="menu">
                            <a href="#users-management" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span>Users management</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="users-management" data-parent="#accordionExample">
                                <li>
                                    <a href="component_tabs.html"> Tabs </a>
                                </li>
                                <li>
                                    <a href="component_accordion.html"> Accordions  </a>
                                </li>
                                <li>
                                    <a href="component_modal.html"> Modals </a>
                                </li>                            
                                <li>
                                    <a href="component_cards.html"> Cards </a>
                                </li>
                                <li>
                                    <a href="component_bootstrap_carousel.html">Carousel</a>
                                </li>
                                <li>
                                    <a href="component_blockui.html"> Block UI </a>
                                </li>
                                <li>
                                    <a href="component_countdown.html"> Countdown </a>
                                </li>
                                <li>
                                    <a href="component_counter.html"> Counter </a>
                                </li>
                                <li>
                                    <a href="component_sweetalert.html"> Sweet Alerts </a>
                                </li>
                                <li>
                                    <a href="component_timeline.html"> Timeline </a>
                                </li>
                                <li>
                                    <a href="component_snackbar.html"> Notifications </a>
                                </li>
                                <li>
                                    <a href="component_session_timeout.html"> Session Timeout </a>
                                </li>
                                <li>
                                    <a href="component_media_object.html"> Media Object </a>
                                </li>
                                <li>
                                    <a href="component_list_group.html"> List Group </a>
                                </li>
                                <li>
                                    <a href="component_pricing_table.html"> Pricing Tables </a>
                                </li>
                                <li>
                                    <a href="component_lightbox.html"> Lightbox </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#admins-management" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span>Admins management</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="admins-management" data-parent="#accordionExample">
                                <li>
                                    <a href="component_tabs.html"> Tabs </a>
                                </li>
                                <li>
                                    <a href="component_accordion.html"> Accordions  </a>
                                </li>
                                <li>
                                    <a href="component_modal.html"> Modals </a>
                                </li>                            
                                <li>
                                    <a href="component_cards.html"> Cards </a>
                                </li>
                                <li>
                                    <a href="component_bootstrap_carousel.html">Carousel</a>
                                </li>
                                <li>
                                    <a href="component_blockui.html"> Block UI </a>
                                </li>
                                <li>
                                    <a href="component_countdown.html"> Countdown </a>
                                </li>
                                <li>
                                    <a href="component_counter.html"> Counter </a>
                                </li>
                                <li>
                                    <a href="component_sweetalert.html"> Sweet Alerts </a>
                                </li>
                                <li>
                                    <a href="component_timeline.html"> Timeline </a>
                                </li>
                                <li>
                                    <a href="component_snackbar.html"> Notifications </a>
                                </li>
                                <li>
                                    <a href="component_session_timeout.html"> Session Timeout </a>
                                </li>
                                <li>
                                    <a href="component_media_object.html"> Media Object </a>
                                </li>
                                <li>
                                    <a href="component_list_group.html"> List Group </a>
                                </li>
                                <li>
                                    <a href="component_pricing_table.html"> Pricing Tables </a>
                                </li>
                                <li>
                                    <a href="component_lightbox.html"> Lightbox </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#user-account-verification" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span>User account verification</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="user-account-verification" data-parent="#accordionExample">
                                <li>
                                    <a href="/user-account-verification">Users</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu">
                            <a href="#wallet-withdrawal-system" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    <span>Wallet &amp; withdrawal system</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </a>
                            <ul className="collapse submenu list-unstyled" id="wallet-withdrawal-system" data-parent="#accordionExample">
                                <li>
                                    <a href="component_tabs.html"> Tabs </a>
                                </li>
                                <li>
                                    <a href="component_accordion.html"> Accordions  </a>
                                </li>
                                <li>
                                    <a href="component_modal.html"> Modals </a>
                                </li>                            
                                <li>
                                    <a href="component_cards.html"> Cards </a>
                                </li>
                                <li>
                                    <a href="component_bootstrap_carousel.html">Carousel</a>
                                </li>
                                <li>
                                    <a href="component_blockui.html"> Block UI </a>
                                </li>
                                <li>
                                    <a href="component_countdown.html"> Countdown </a>
                                </li>
                                <li>
                                    <a href="component_counter.html"> Counter </a>
                                </li>
                                <li>
                                    <a href="component_sweetalert.html"> Sweet Alerts </a>
                                </li>
                                <li>
                                    <a href="component_timeline.html"> Timeline </a>
                                </li>
                                <li>
                                    <a href="component_snackbar.html"> Notifications </a>
                                </li>
                                <li>
                                    <a href="component_session_timeout.html"> Session Timeout </a>
                                </li>
                                <li>
                                    <a href="component_media_object.html"> Media Object </a>
                                </li>
                                <li>
                                    <a href="component_list_group.html"> List Group </a>
                                </li>
                                <li>
                                    <a href="component_pricing_table.html"> Pricing Tables </a>
                                </li>
                                <li>
                                    <a href="component_lightbox.html"> Lightbox </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* END SIDEBAR */}
        </>
    )
}