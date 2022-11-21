let data = 
    [
        { 
            "id": "0", "text": "System Managment", 
            "children":
                [
                    { "id": "0-0", "text": "Role", 
                        "children": 
                            [
                                { "id": "0-0-0", "text": "users" },
                                { "id": "0-0-1", "text": "node-0-0-1" }, 
                                { "id": "0-0-2", "text": "node-0-0-2" }
                            ] 
                    },
                    
                    { "id": "0-1", "text": "Role", 
                        "children": 
                            [
                                { "id": "0-01-0", "text": "users" }, 
                                { "id": "0-01-1", "text": "users" }, 
                                { "id": "0-01-2", "text": "users" } 
                            ] 
                    },

                    
                ]
        },

        { 
            "id": "1", "text": "Device Managment", 
            "children":
                [
                    { "id": "1-0", "text": "Role", 
                        "children": 
                            [
                                { "id": "1-0-0", "text": "users" }, { "id": "1-0-1", "text": "node-0-0-1" }, 
                                { "id": "1-0-2", "text": "node-0-0-2" }
                            ] 
                    },

                    { "id": "1-1", "text": "node-0-1"}
                ]
        },

        
        
    ]

    let tree = new Tree(".treeviewcontainer", {
      data: [{ id: "-1", text: "All Permissions", children: data }],
      closeDepth: 3,
      loaded: function () {
        this.values = ["","","",,"", ""];
        console.log(this.selectedNodes);
        console.log(this.values);
        
      },
      onChange: function () {
        console.log(this.values);
      },
    });