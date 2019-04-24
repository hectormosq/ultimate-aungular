ViewEncapsulation.Emulated is the default mode and it will keep the class component selector unique so its styles only affects will affect to itself

ViewEncapsulation.Native Will create a shadow dom from the original but in its scope it will no interfere with the outside elements

ViewEncapsulation.None it will no encapsulate the component so any class which match with its selector it will affects it and any class declared here it will affect outside matching elements

TODO use cases for each encapsulation