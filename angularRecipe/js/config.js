var fw = {
	currentGroupName : "",
	currentPageName : "",
	currentTotalPage : 0,
	currentPageIndex: 0,
	canNext: false,
	canBack: false,

	pages : {
				"jquery":[
					{"page":"home"  }
				],

				"bootstrap":[
					{	"page":"tutorial",
						content:[
							{ 
								title: "Get Started",
								sortContent: "What is Bootstrap? Why Use Bootstrap? Where to Get Bootstrap?",
								link: "#bootstrap/getStarted"
							},
							{ 
								title: "Grid Basic",
								sortContent: "Bootstrap's grid system allows up to 12 columns across the page.",
								link: "#bootstrap/gridBasic"
							},
							{ 
								title: "Text/Typography",
								sortContent: "In this chapter, we will look at some HTML elements that will be styled a little bit different by Bootstrap than browser defaults.",
								link: "#bootstrap/typography"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Glyphicons",
								sortContent: "Bootstrap provides 200 glyphicons from the Glyphicons Halflings set. Glyphicons can be used in text, buttons, toolbars, navigation, forms, etc.",
								link: "#bootstrap/glyphicons"
							},
							{ 
								title: "Badges/Labels",
								sortContent: "Badges are numerical indicators of how many items are associated with a link:<br><a href=''>News <span class='badge'>5</span></a> <a href=''>Comments <span class='badge'>10</span></a> <a href=''>Updates <span class='badge'>2</span></a>",
								link: "#bootstrap/badgesLabel"
							},
							{ 
								title: "Tables",
								sortContent: "A basic Bootstrap table has a light padding and only horizontal dividers. The <span class='code-span'>.table</span> class adds basic styling to a table.",
								link: "#bootstrap/tableBasic"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Images",
								sortContent: "<img src='images/bs.png' class='img-rounded' alt='Bootstrap' width='60' height='60'> <img src='images/bs.png' class='img-circle' alt='Bootstrap' width='60' height='60'> <img src='images/bs.png' class='img-thumbnail' alt='Bootstrap' width='60' height='60'>",
								link: "#bootstrap/images"
							},
							{ 
								title: "Jumbotron",
								sortContent: "A jumbotron indicates a big box for calling extra attention to some special content or information. A jumbotron is displayed as a grey box with rounded corners.",
								link: "#bootstrap/jumbotron"
							},
							{ 
								title: "Wells",
								sortContent: "The <span class='code-span'>.well</span> class adds a rounded border around an element with a gray background color and some padding. Change size of the well:<span class='code-span'>.well-sm</span> (small), <span class='code-span'>.well-lg</span> (large).",
								link: "#bootstrap/wells"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Alerts",
								sortContent: "Alerts are created with the .alert class, followed by one of the four contextual classes <span class='code-span'>.alert-success, .alert-info, .alert-warning or .alert-danger",
								link: "#bootstrap/alerts"
							},
							{ 
								title: "Panels",
								sortContent: "A panel in bootstrap is a bordered box with some padding around its content. Panels are created with the <span class='code-span'>.panel</span> class, and content inside the panel has a <span class='code-span'>.panel-body</span> class.",
								link: "#bootstrap/panels"
							},
							{ 
								title: "Buttons",
								sortContent: "Bootstrap provides seven styles of buttons: <br><button type='button' class='btn btn-default'>Default</button> <button type='button' class='btn btn-primary'>Primary</button> <button type='button' class='btn btn-success'>Success</button> <button type='button' class='btn btn-info'>Info</button> <br><button type='button' class='btn btn-warning'>Warning</button> <button type='button' class='btn btn-danger'>Danger</button> <button type='button' class='btn btn-link'>Link</button>",
								link: "#bootstrap/buttons"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Button Groups",
								sortContent: "Bootstrap allows you to group a series of buttons together (on a single line) in a button group:<br> <div class='btn-group'> <button type='button' class='btn btn-primary'>Apple</button> <button type='button' class='btn btn-primary'>Samsung</button> <button type='button' class='btn btn-primary'>Sony</button> </div>",
								link: "#bootstrap/buttonGroups"
							},
							{ 
								title: "Progress Bars",
								sortContent: "A progress bar can be used to show a user how far along he/she is in a process. <div class='progress'> <div class='progress-bar' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style='width:70%'> <span class='sr-only'>70% Complete</span> </div> </div>",
								link: "#bootstrap/progressBars"
							},
							{ 
								title: "Pagination",
								sortContent: "If you have a web site with lots of pages, you may wish to add some sort of pagination to each page. <ul class='pagination'> <li><a href='#'>1</a></li> <li><a href='#'>2</a></li> <li><a href='#'>3</a></li> <li><a href='#'>4</a></li> <li><a href='#'>5</a></li> </ul>",
								link: "#bootstrap/pagination"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Pager",
								sortContent: "Pager is also a form of pagination but it provides previous and next buttons (links). <ul class='pager' style='margin:10px 0;'> <li class='deactive'><a href='#'>Previous</a></li> <li class='deactive'><a href='#'>Next</a></li> </ul>",
								link: "#bootstrap/pager"
							},
							{ 
								title: "List Groups",
								sortContent: "<ul class='list-group' style='margin-bottom:0;'> <li class='list-group-item' style='padding:3px 15px;'>First item</li> <li class='list-group-item' style='padding:3px 15px;'>Second item</li> <li class='list-group-item' style='padding:3px 15px;'>Third item</li> </ul>",
								link: "#bootstrap/listGroups"
							},
							{ 
								title: "Dropdowns",
								sortContent: "A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list: <div class='dropdown'> <button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Dropdown Example <span class='caret'></span></button> <ul class='dropdown-menu'> <li><a href='#'>HTML</a></li> <li><a href='#'>CSS</a></li> <li><a href='#'>JavaScript</a></li> </ul> </div>",
								link: "#bootstrap/dropdowns"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Tabs / Pills",
								sortContent: "<ul class='nav nav-tabs'> <li class='active'><a href='#'>Home</a></li> <li class='dropdown'> <a class='dropdown-toggle' data-toggle='dropdown' href='#'>Menu 1 <span class='caret'></span></a> <ul class='dropdown-menu'> <li><a href='#'>Submenu 1-1</a></li> <li><a href='#'>Submenu 1-2</a></li> <li><a href='#'>Submenu 1-3</a></li> </ul> </li> <li><a href='#'>Menu 2</a></li> <li><a href='#'>Menu 3</a></li> </ul> <br> <ul class='nav nav-pills'> <li class='active'><a href='#'>Home</a></li> <li><a href='#'>Menu 1</a></li> <li><a href='#'>Menu 2</a></li> <li><a href='#'>Menu 3</a></li> </ul>",
								link: "#bootstrap/tabsPills"
							},
							{ 
								title: "Navbar",
								sortContent: "<nav class='navbar navbar-default'> <div class='container-fluid'> <div class='navbar-header'> <a class='navbar-brand' href='#'>WebSiteName</a> </div> <div> <ul class='nav navbar-nav'> <li class='active'><a href='#'>Home</a></li> <li><a href='#'>Page 1</a></li> <li><a href='#'>Page 2</a></li> <li><a href='#'>Page 3</a></li> </ul> </div> </div> </nav>",								
								link: "#bootstrap/navbar"
							},
							{ 
								title: "Scrollspy",
								sortContent: "The Scrollspy plugin is used to automatically update links in a navigation list based on scroll position.",
								link: "#bootstrap/scrollspy"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Forms",
								sortContent: "Form controls automatically receive some global styling with Bootstrap: All textual <span class='code-span'>&lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt;</span> elements with class <span class='code-span'>.form-control</span> have a width of 100%.",
								link: "#bootstrap/forms"
							},
							{ 
								title: "Inputs",
								sortContent: "Bootstrap supports all the HTML5 input types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.",
								link: "#bootstrap/inputs"
							},
							{ 
								title: "Inputs 2",
								sortContent: "If you need to insert plain text next to a form label within a horizontal form, use the <span class='code-span'>.form-control-static</span> class on a <span class='code-span'>&lt;p&gt;</span> element.",
								link: "#bootstrap/inputs2"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Input Sizing",
								sortContent: "Set the heights of input elements using classes like <span class='code-span'>.input-lg and .input-sm</span>. Set the widths of elements using grid column classes like <span class='code-span'>.col-lg-*and .col-sm-*</span>.",
								link: "#bootstrap/inputSizing"
							},
							{ 
								title: "Carousel",
								sortContent: "The Carousel plugin is a component for cycling through elements, like a carousel (slideshow).",
								link: "#bootstrap/carousel"
							},
							{ 
								title: "Modal",
								sortContent: "The Modal plugin is a dialog box/popup window that is displayed on top of the current page: <button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Open Modal</button> <div id='myModal' class='modal fade' role='dialog'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>Modal Header</h4> </div> <div class='modal-body'> <p>Some text in the modal.</p> </div> <div class='modal-footer'> <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button> </div> </div> </div> </div>",
								link: "#bootstrap/modal"
							},							
							{ 	title: "Clearfix"	},

							{ 
								title: "Tooltip",
								sortContent: "The Tooltip plugin is small pop-up box that appears when the user moves the mouse pointer over an element:<br> <button style='margin:7px 15px 17px 0;' type='button' class='btn btn-success' data-toggle='tooltip' data-placement='bottom' title='' data-original-title='Hooray!'>Hover over me</button> <a href='javascript:void(0);' data-toggle='tooltip' data-placement='right' title='' data-original-title='Hooray!'>Hover over me</a>",
								link: "#bootstrap/tooltip"
							},
							{ 
								title: "Popover",
								sortContent: "The Popover plugin is similar to tooltips; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.<br> <button style='margin:7px 15px 17px 0;' type='button' data-placement='bottom' class='btn btn-md btn-success' data-toggle='popover' title='' data-content='Some content inside the popover' data-original-title='Popover Header'>Click To Toggle Popover</button> <a href='javascript:void(0);' data-toggle='popover' data-placement='right' title='' data-content='Some content inside the popover' data-original-title='Popover Header'>Click To Toggle Popover</a>",
								link: "#bootstrap/popover"
							},
							{ 
								title: "Collapse (collapse.js)",
								sortContent: "Get base styles and flexible support for collapsible components like accordions and navigation. Plugin dependency: Collapse requires the transitions plugin to be included in your version of Bootstrap.",
								link: "#bootstrap/collapse"
							},							
							{ 	title: "Clearfix"	}
						]
					},

					{"page":"getStarted", "topic":"Bootstrap Get Started", "breadcrumb":"Get Started"   },
					{"page":"gridBasic", "topic":"Bootstrap Grid", "breadcrumb":"Grid"   },
					{"page":"typography", "topic":"Bootstrap Typography", "breadcrumb":"Typography"   },

					{"page":"glyphicons", "topic":"Bootstrap Glyphicons", "breadcrumb":"Glyphicons"   },
					{"page":"badgesLabel", "topic":"Bootstrap Badges & Label", "breadcrumb":"Badges & Label"   },
					{"page":"tableBasic", "topic":"Bootstrap Table", "breadcrumb":"Table"   },

					{"page":"images", "topic":"Bootstrap Images", "breadcrumb":"Images"   },
					{"page":"jumbotron", "topic":"Bootstrap Jumbotron", "breadcrumb":"Jumbotron"   },
					{"page":"wells", "topic":"Bootstrap Wells", "breadcrumb":"Wells"  },

					{"page":"alerts", "topic":"Bootstrap Alerts", "breadcrumb":"Alerts"   },
					{"page":"panels", "topic":"Bootstrap Panels", "breadcrumb":"Panels"  },
					{"page":"buttons", "topic":"Bootstrap Buttons", "breadcrumb":"Buttons"   },

					{"page":"buttonGroups", "topic":"Bootstrap Button Groups", "breadcrumb":"Button Groups"   },
					{"page":"progressBars", "topic":"Bootstrap Progress Bars", "breadcrumb":"Progress Bars"   },
					{"page":"pagination", "topic":"Bootstrap Pagination", "breadcrumb":"Pagination"   },

					{"page":"pager", "topic":"Bootstrap Pager", "breadcrumb":"Pager"   },
					{"page":"listGroups", "topic":"Bootstrap List Groups", "breadcrumb":"List Groups"   },
					{"page":"dropdowns", "topic":"Bootstrap Dropdowns", "breadcrumb":"Dropdowns"   },

					{"page":"tabsPills", "topic":"Bootstrap Tabs & Pills", "breadcrumb":"Tabs & Pills"   },
					{"page":"navbar", "topic":"Bootstrap NavBar", "breadcrumb":"NavBar"   },
					{"page":"scrollspy", "topic":"Bootstrap Scrollspy", "breadcrumb":"Scrollspy"   },

					{"page":"forms", "topic":"Bootstrap Forms", "breadcrumb":"Forms"   },
					{"page":"inputs", "topic":"Bootstrap Inputs", "breadcrumb":"Inputs"   },
					{"page":"inputs2", "topic":"Bootstrap Inputs2", "breadcrumb":"Inputs2"   },

					{"page":"inputSizing", "topic":"Bootstrap Input Sizing", "breadcrumb":"Input Sizing"   },
					{"page":"carousel", "topic":"Bootstrap Carousel", "breadcrumb":"Carousel"   },
					{"page":"modal", "topic":"Bootstrap Modal", "breadcrumb":"Modal"   },

					{"page":"tooltip", "topic":"Bootstrap Tooltip", "breadcrumb":"Tooltip"   },
					{"page":"popover", "topic":"Bootstrap Popover", "breadcrumb":"Popover"   },
					{"page":"collapse", "topic":"Bootstrap Collapse", "breadcrumb":"Collapse"   }
				],

				"angular":[
					{	"page":"tutorial",
						content:[
							{ 
								title: "Introduction",
								sortContent: "AngularJS is a JavaScript framework. It is a library written in JavaScript. AngularJS is distributed as a JavaScript file, and can be added to a web page with a script tag.",
								link: "#angular/intro"
							},
							{ 
								title: "Expressions",
								sortContent: "AngularJS expressions are written inside double braces. AngularJS expressions binds data to HTML the same way as the <span class='spanRed'>ng-bind</span> directive.",
								link: "#angular/expressions"
							},
							{ 
								title: "Directives",
								sortContent: "AngularJS <span class='spanRed'>directives</span> are extended HTML attributes with the prefix <span class='spanRed'>ng-</span>.<br>The <span class='spanRed'>ng-app</span> directive initializes an AngularJS application.<br>The <span class='spanRed'>ng-init</span> directive initializes application data.<br>The <span class='spanRed'>ng-model</span> directive binds the value of HTML controls (input, select, textarea) to application data.",
								link: "#angular/directives"
							},
							{ 	title: "Clearfix"	},

							{ 
								title: "Controllers",								
								sortContent: "AngularJS applications are controlled by controllers. <br>The <span class='spanRed'>ng-controller</span> directive defines the application controller. <br>A controller is a JavaScript Object, created by a standard JavaScript object constructor.",
								link: "#angular/controllers"
							},
							{ 
								title: "Filters",
								sortContent: "Filters can be added to expressions and directives using a pipe character ( '|' ). <br>AngularJS filters can be used to transform data: <span class='spanRed'>currency, filter, lowercase, orderBy, uppercase</span>.",
								link: "#angular/filters"
							},
							{ 
								title: "Http",								
								sortContent: "<span class='spanRed'>$http</span> is an AngularJS service for reading data from remote servers.",
								link: "#angular/http"
							},
							{ 	title: "Clearfix"	},

							{ 
								title: "Tables",
								sortContent: "The <span class='spanRed'>ng-repeat</span> directive is perfect for displaying tables.",
								link: "#angular/tables"
							},
							{ 
								title: "SQL",
								sortContent: "With the code from the chapter <span class='spanRed'>$http</span>, it can used to read from databases.",
								link: "#angular/sql"
							},
							{ 
								title: "DOM",
								sortContent: "AngularJS has directives for binding application data to the attributes of HTML DOM elements.",
								link: "#angular/dom"
							},
							{ 	title: "Clearfix"	},

							{ 
								title: "Events",
								sortContent: "AngularJS has its own HTML events directives.",
								link: "#angular/events"
							},
							{ 
								title: "Modules",
								sortContent: "An AngularJS module defines an application.<br>A module is a container for the different parts of an application.<br>All application controllers should belong to a module.",
								link: "#angular/modules"
							},
							{ 
								title: "Forms",
								sortContent: "An AngularJS form is a collection of input controls.",
								link: "#angular/forms"
							},
							{ 	title: "Clearfix"	},

							{ 
								title: "Validation",
								sortContent: "AngularJS forms and controls can validate input data.",
								link: "#angular/validation"
							},
							{ 
								title: "API",
								sortContent: "The AngularJS Global API is a set of global JavaScript functions for performing common tasks like:<ul><li>Comparing objects</li><li>Iterating objects</li><li>Converting data</li></ul> The Global API functions are accessed using the angular object.",
								link: "#angular/api"
							},
							{ 
								title: "Bootstrap",
								sortContent: "Bootstrap is a popular style sheet. This chapter demonstrates how to use it with AngularJS.",
								link: "#angular/bootstrap"
							},
							{ 	title: "Clearfix"	},

							{ 
								title: "Includes",
								sortContent: "With AngularJS, you can include HTML content, using the <span class='spanRed'>ng-include</span> directive",
								link: "#angular/includes"
							},
							{ 
								title: "Application",
								sortContent: "It is time to create a real AngularJS Single Page Application (SPA).",
								link: "#angular/application"
							}
							,
							{ 
								title: "References",
								sortContent: "AngularJS References.",
								link: "#angular/references"
							}
						]
					},

					{"page":"intro", "topic":"Angular Introduction", "breadcrumb":"Introduction"  },
					{"page":"expressions", "topic":"Angular Expressions", "breadcrumb":"Expressions"  },
					{"page":"directives", "topic":"Angular Directives", "breadcrumb":"Directives"  },

					{"page":"controllers", "topic":"Angular Controllers", "breadcrumb":"Controllers"  },
					{"page":"filters", "topic":"Angular Filters", "breadcrumb":"Filters"  },
					{"page":"http", "topic":"Angular HTTP", "breadcrumb":"HTTP"  },

					{"page":"tables", "topic":"Angular Tables", "breadcrumb":"Tables"  },
					{"page":"sql", "topic":"Angular SQL", "breadcrumb":"SQL"  },
					{"page":"dom", "topic":"Angular DOM", "breadcrumb":"DOM"  },

					{"page":"events", "topic":"Angular Events", "breadcrumb":"Events"  },
					{"page":"modules", "topic":"Angular Modules", "breadcrumb":"Modules"  },
					{"page":"forms", "topic":"Angular Forms", "breadcrumb":"Forms"  },

					{"page":"validation", "topic":"Angular Validation", "breadcrumb":"Validation"  },
					{"page":"api", "topic":"Angular API", "breadcrumb":"API"  },
					{"page":"bootstrap", "topic":"Angular Bootstrap", "breadcrumb":"Bootstrap"  },

					{"page":"includes", "topic":"Angular Includes", "breadcrumb":"Includes"  },
					{"page":"application", "topic":"Angular Application", "breadcrumb":"Aplication"  },
					{"page":"references", "topic":"Angular References", "breadcrumb":"References"  }
					
				],

				"about":[],
				"contact":[]
			}

};
