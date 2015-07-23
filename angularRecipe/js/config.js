var fw = {
	currentGroupName : "",
	currentPageName : "",
	currentTotalPage : 0,
	currentPageIndex: 0,
	canNext: false,
	canBack: false,

	pages : {
				"html5":[
					{"page":"tutorial"},

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

				"css":[
					{"page":"tutorial"},

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

				"javascript":[
					{"page":"tutorial"  }
				],

				"jquery":[
					{"page":"tutorial"  }
				],

				"bootstrap":[
					{"page":"tutorial"},

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
					{"page":"tutorial"},

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

				"requirejs":[
					{"page":"tutorial"  },
					{"page":"home", "topic":"Home", "breadcrumb":"Home"  },
					{"page":"start", "topic":"Start", "breadcrumb":"Start"  },
					{"page":"api", "topic":"API", "breadcrumb":"API"  },
					{"page":"optimazation", "topic":"Optimization", "breadcrumb":"Optimization"  },
					{"page":"usewithjquery", "topic":"Use with jQuery", "breadcrumb":"Use with jQuery"  }
				],

				"about":[],
				"contact":[]
			}

};
