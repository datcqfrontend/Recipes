var fw = {
	currentGroupName : "",
	currentPageName : "",
	currentTotalPage : 0,
	currentPageIndex: 0,
	canNext: false,
	canBack: false,

	pages : {
				"html":[
					{"page":"tutorial"},

					{"page":"intro", "topic":"HTML Introduction", "breadcrumb":"Introduction"  },
					{"page":"editors", "topic":"HTML Editors", "breadcrumb":"Editors"  },
					{"page":"basic", "topic":"HTML Basic", "breadcrumb":"Basic"  },

					{"page":"elements", "topic":"HTML Elements", "breadcrumb":"Elements"  },
					{"page":"attributes", "topic":"HTML Attributes", "breadcrumb":"Attributes"  },
					{"page":"headings", "topic":"HTML Headings", "breadcrumb":"Headings"  },

					{"page":"paragraphs", "topic":"HTML Paragraphs", "breadcrumb":"Paragraphs"  },
					{"page":"styles", "topic":"HTML Styles", "breadcrumb":"Styles"  },
					{"page":"formatting", "topic":"HTML Formatting", "breadcrumb":"Formatting"  },

					{"page":"quotations", "topic":"HTML Quotations", "breadcrumb":"Quotations"  },
					{"page":"computerCode", "topic":"HTML Computer Code", "breadcrumb":"Computer Code"  },
					{"page":"comments", "topic":"HTML Comments", "breadcrumb":"Comments"  },					

					{"page":"css", "topic":"HTML CSS", "breadcrumb":"CSS"  },
					{"page":"links", "topic":"HTML Links", "breadcrumb":"Links"  },
					{"page":"images", "topic":"HTML Images", "breadcrumb":"Images"  },					

					{"page":"tables", "topic":"HTML Tables", "breadcrumb":"Tables"  },
					{"page":"lists", "topic":"HTML Lists", "breadcrumb":"Lists"  },
					{"page":"blocks", "topic":"HTML Blocks", "breadcrumb":"Blocks"  },	

					{"page":"classes", "topic":"HTML Classes", "breadcrumb":"Classes"  },
					{"page":"layout", "topic":"HTML Layout", "breadcrumb":"Layout"  },
					{"page":"responsive", "topic":"HTML Responsive", "breadcrumb":"Responsive"  },					

					{"page":"iframes", "topic":"HTML Iframes", "breadcrumb":"Iframes"  },
					{"page":"colorNames", "topic":"HTML Color Names", "breadcrumb":"Color Names"  },
					{"page":"colorValues", "topic":"HTML Color Values", "breadcrumb":"Color Values"  },					

					{"page":"colorShades", "topic":"HTML Color Shades", "breadcrumb":"Color Shades"  },
					{"page":"javascript", "topic":"HTML Javascript", "breadcrumb":"Javascript"  },
					{"page":"head", "topic":"HTML Head", "breadcrumb":"Head"  },	

					{"page":"entities", "topic":"HTML Entities", "breadcrumb":"Entities"  },
					{"page":"symbols", "topic":"HTML Symbols", "breadcrumb":"Symbols"  },
					{"page":"charset", "topic":"HTML Charset", "breadcrumb":"Charset"  },

					{"page":"urlEncode", "topic":"HTML Url Encode", "breadcrumb":"Url Encode"  },
					{"page":"xhtml", "topic":"XHTML", "breadcrumb":"XHTML"  },
					{"page":"forms", "topic":"Forms", "breadcrumb":"Forms"  },

					{"page":"formElements", "topic":"Form Elements", "breadcrumb":"Form Elements"  },
					{"page":"inputTypes", "topic":"Input Types", "breadcrumb":"Input Types"  },
					{"page":"inputAttributes", "topic":"Input Attributes", "breadcrumb":"Input Attributes"  }
					
					
				],

				"html5":[
					{"page":"tutorial"},

					{"page":"h5Intro", "topic":"HTML5 Introduction", "breadcrumb":"Introduction"  },
					{"page":"h5Support", "topic":"HTML5 Support", "breadcrumb":"Support"  },
					{"page":"h5Elements", "topic":"HTML5 Elements", "breadcrumb":"Elements"  },

					{"page":"h5Semantics", "topic":"HTML5 Semantics", "breadcrumb":"Semantics"  },
					{"page":"h5Migration", "topic":"HTML5 Migration", "breadcrumb":"Migration"  },
					{"page":"h5StyleGuide", "topic":"HTML5 Style Guide", "breadcrumb":"Style Guide"  },

					{"page":"h5Canvas", "topic":"HTML5 Canvas", "breadcrumb":"Canvas"  },
					{"page":"h5SVG", "topic":"HTML5 SVG", "breadcrumb":"SVG"  },
					{"page":"h5Media", "topic":"HTML5 Media", "breadcrumb":"Media"  },

					{"page":"h5Video", "topic":"HTML5 Video", "breadcrumb":"Video"  },
					{"page":"h5Audio", "topic":"HTML5 Audio", "breadcrumb":"Audio"  },
					{"page":"h5Plugins", "topic":"HTML5 Plugins", "breadcrumb":"Plugins"  },					

					{"page":"h5Youtube", "topic":"HTML5 Youtube", "breadcrumb":"Youtube"  },
					{"page":"h5Geolocation", "topic":"HTML5 Geolocation", "breadcrumb":"Geolocation"  },
					{"page":"h5DragDrop", "topic":"HTML5 Drag Drop", "breadcrumb":"Drag Drop"  },					

					{"page":"h5LocalStorage", "topic":"HTML5 Local Storage", "breadcrumb":"Local Storage"  },
					{"page":"h5AppCache", "topic":"HTML5 App Cache", "breadcrumb":"App Cache"  },
					{"page":"h5WebWorkers", "topic":"HTML5 Web Workers", "breadcrumb":"Web Workers"  },	

					{"page":"h5SSE", "topic":"HTML5 SSE", "breadcrumb":"SSE"  }					
					
				],

				"css":[
					{"page":"tutorial"},

					{"page":"intro", "topic":"CSS Introduction", "breadcrumb":"Introduction"  },
					{"page":"syntax", "topic":"CSS Syntax", "breadcrumb":"Syntax"  },
					{"page":"selectors", "topic":"CSS Selectors", "breadcrumb":"Selectors"  },

					{"page":"howTo", "topic":"CSS How To", "breadcrumb":"How To"  },
					{"page":"backgrounds", "topic":"CSS Backgrounds", "breadcrumb":"Backgrounds"  },
					{"page":"text", "topic":"CSS Text", "breadcrumb":"Text"  },

					{"page":"fonts", "topic":"CSS Fonts", "breadcrumb":"Fonts"  },
					{"page":"links", "topic":"CSS Links", "breadcrumb":"Links"  },
					{"page":"lists", "topic":"CSS Lists", "breadcrumb":"Lists"  },	

					{"page":"tables", "topic":"CSS Tables", "breadcrumb":"Tables"  },
					{"page":"boxModel", "topic":"CSS Box Model", "breadcrumb":"Box Model"  },
					{"page":"border", "topic":"CSS Border", "breadcrumb":"Border"  },

					{"page":"outline", "topic":"CSS Outline", "breadcrumb":"Outline"  },
					{"page":"margin", "topic":"CSS Margin", "breadcrumb":"Margin"  },
					{"page":"padding", "topic":"CSS Padding", "breadcrumb":"Padding"  },

					{"page":"dimension", "topic":"CSS Dimension", "breadcrumb":"Dimension"  },
					{"page":"display", "topic":"CSS Display", "breadcrumb":"Display"  },
					{"page":"maxWidth", "topic":"CSS Max-width", "breadcrumb":"Max-width"  },

					{"page":"position", "topic":"CSS Position", "breadcrumb":"Position"  },
					{"page":"float", "topic":"CSS Float", "breadcrumb":"Float"  },
					{"page":"inlineBlock", "topic":"CSS Inline-block", "breadcrumb":"Inline-block"  },

					{"page":"align", "topic":"CSS Align", "breadcrumb":"Align"  },
					{"page":"combinators", "topic":"CSS Combinators", "breadcrumb":"Combinators"  },
					{"page":"pseudoClass", "topic":"CSS Pseudo-class", "breadcrumb":"Pseudo-class"  },

					{"page":"pseudoElement", "topic":"CSS Pseudo-element", "breadcrumb":"Pseudo-element"  },
					{"page":"navigationBar", "topic":"CSS Navigation Bar", "breadcrumb":"Navigation Bar"  },
					{"page":"imageGallery", "topic":"CSS Image Gallery", "breadcrumb":"Image Gallery"  },

					{"page":"imageOpacity", "topic":"CSS Image Opacity", "breadcrumb":"Image Opacity"  },
					{"page":"imageSprites", "topic":"CSS Image Sprites", "breadcrumb":"Image Sprites"  },
					{"page":"mediaTypes", "topic":"CSS Media Types", "breadcrumb":"Media Types"  },

					{"page":"attrSelectors", "topic":"CSS Selectors", "breadcrumb":"Selectors"  }
										
				],

				"css3":[
					{"page":"tutorial"},

					{"page":"intro", "topic":"CSS3 Introduction", "breadcrumb":"Introduction"  },
					{"page":"roundedCorners", "topic":"CSS3 Rounded Corners", "breadcrumb":"Rounded Corners"  },
					{"page":"borderImages", "topic":"CSS3 Border Images", "breadcrumb":"Border Images"  },					

					{"page":"backgrounds", "topic":"CSS3 Backgrounds", "breadcrumb":"Backgrounds"  },
					{"page":"colors", "topic":"CSS3 Colors", "breadcrumb":"Colors"  },
					{"page":"gradients", "topic":"CSS3 Gradients", "breadcrumb":"Gradients"  },

					{"page":"shadows", "topic":"CSS3 Shadows", "breadcrumb":"Shadows"  },
					{"page":"text", "topic":"CSS3 Text", "breadcrumb":"Text"  },
					{"page":"fonts", "topic":"CSS3 Fonts", "breadcrumb":"Fonts"  },

					{"page":"2Dtransforms", "topic":"CSS3 2D Transforms", "breadcrumb":"2D Transforms"  },
					{"page":"3Dtransforms", "topic":"CSS3 3D Transforms", "breadcrumb":"3D Transforms"  },
					{"page":"transitions", "topic":"CSS3 Transitions", "breadcrumb":"Transitions"  },

					{"page":"animations", "topic":"CSS3 Animations", "breadcrumb":"Animations"  },
					{"page":"multipleColumns", "topic":"CSS3 Multiple Columns", "breadcrumb":"Multiple Columns"  },
					{"page":"userInterface", "topic":"CSS3 User Interface", "breadcrumb":"User Interface"  },

					{"page":"boxSizing", "topic":"CSS3 Box Sizing", "breadcrumb":"Box Sizing"  }
				],

				"cssRWD":[
					{"page":"tutorial"},

					{"page":"intro", "topic":"RWD Introduction", "breadcrumb":"Introduction"  },
					{"page":"viewport", "topic":"RWD Viewport", "breadcrumb":"Viewport"  },
					{"page":"gridView", "topic":"RWD Grid View", "breadcrumb":"Grid View"  },

					{"page":"mediaQueries", "topic":"RWD Media Queries", "breadcrumb":"Media Queries"  },
					{"page":"images", "topic":"RWD Images", "breadcrumb":"Images"  },
					{"page":"videos", "topic":"RWD Videos", "breadcrumb":"Videos"  },

					{"page":"frameworks", "topic":"RWD Frameworks", "breadcrumb":"Frameworks"  }					
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

				"angularAPI":[
					{"page":"tutorial"},

					{"page":"lowercase", "topic":"angular.lowercase", "breadcrumb":"angular.lowercase"  },
					{"page":"uppercase", "topic":"angular.uppercase", "breadcrumb":"angular.uppercase"  },
					{"page":"forEach", "topic":"angular.forEach", "breadcrumb":"angular.forEach"  },

					{"page":"extend", "topic":"angular.extend", "breadcrumb":"angular.extend"  },
					{"page":"merge", "topic":"angular.merge", "breadcrumb":"angular.merge"  },
					{"page":"noop", "topic":"angular.noop", "breadcrumb":"angular.noop"  }
				],

				"requirejs":[
					{"page":"tutorial"  },
					{"page":"start", "topic":"Start", "breadcrumb":"Start"  },
					{"page":"api", "topic":"API", "breadcrumb":"API"  },
					{"page":"optimization", "topic":"Optimization", "breadcrumb":"Optimization"  }
				],

				"about":[],
				"contact":[]
			}

};
