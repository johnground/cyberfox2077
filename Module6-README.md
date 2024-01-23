### Navigate to the proper folder to prepare to download your role
    On the TURBO ROOK Provisioning Laptop
    Open up a terminal
    Change directories to the local roles folder
        cd /opt/rook-provisioner/local/roles
        (local roles will override roles that are used by `rookengine` by default)

 **Navigate to github to prepare cloning down your role
    Open up firefox
    Navigate to github and your ansible role.
        https://github.com/geerlingguy/ansible-role-docker
    To find the link to clone the role:
        Click on the green square that says <> Code
        copy the HTTPS url displayed

### Using the terminal to clone your project down
    Return to your command prompt and run the command to clone down your project
        You will want to type `git clone`, paste the url you just copied, and finally enter the name of the role (following the convention of "<collection name>.<role name>")
            e.g. git clone https://github.com/geerlingguy/ansible-role-docker.git geerlingguy.ansible-role-docker
    Your role will be downloaded into your /opt/rook-provisioner/local/roles
        use `ls`` to confirm it exists as expected

### Adding your Role to the TURBO ROOK UI
    Now return to the web browser with Turbo Rook open
    Add /Admin to the end of the URL
    This opens Turbo Rook's Admin page
    On the left sidebar, click on Software to open up a drop down menu.
    Select Roles
    In the upper right side of the screen you will see an orange `+ Add New` button
    When clicked you will be brought to the `Add Role` screen
        Role Name
            Human-Readable role name
        Ansible Role Location
            The name of the role as saved on disk (`<collection name>.<role name>`)
        Description
            Write a description of your role
        Scroll down
            You do not need to enter or adjust any of the following advanced settings:
                Source URL
                Source Tag
                Hypervisor
                Suport Level
                Supports commercial software licenses
                Works Offline
                Manage Role Relationships
                Load Role from File
    Next, select Valid Systems for your Role:
        For this instance your role should be set to be valid on both a Server and VM
            Under the Server column select the box next to Ubuntu 22.04-desktop 
            Under the VM column select the box next to Ubuntu 22.04-desktop
    You do not need to set any System Requiremnts for this example
    You may now scroll to the bottom of the page and click `Save`

### You are now ready to Provision a device with your newly added role!

    On the top bar of TURBO ROOK click on Launch Deployment
        For a Deployment Type select "Blank"
        Look to the right side of the screen for the " + Add Machine " button
    We will now walk throught the Add Hardware Pop up
        Host Name
            Enter your Host Name
        Select Machine Type
            Click the box and select "Server" from the drop down
        Select Operating System
            Click the box and select "EsXi 7 (core)" from the drop down
        Turn on the toggle switch for Existing
        Hypervisor IP Address
            Enter the IP Address of the Server you are going to provision
        Hypervisor Username
            Enter the Username for the Existing ESXi
        Hypervisor Password
            Enter the Password for the Existing ESXi
        The rest of the options below are optional and you do not need to fill them in
        Scroll down and Turn off "Run Eclypsium Scan" and "Wipe Disk Partitions before Deploying Operating Systems" These are on by default but cannot be run against existing ESXi hypervisors.
        Select Save
    Click Continue to Roles and VMs
    On this screen select "Add New VM" on the left of the screen below your ESXI instance
        Host Name
            Enter your host name
        Select Operating System
            Click the box and select "Ubuntu 22.04-desktop (beta)" from the drop down
        Virtual Machine Properties
            Select Hypervisor will already be auto populated with the ESXi already entered
        The remainaing options are optional and not needed for this example
        Scroll down to the bottom to the Select Roles section
            Here you will select the box next to the following roles:
                Docker (core)
                Open CTI
                YOUR OWN ADDED ROLE
        When completed, click "Save"
    You can now click on the ESXi machine and a drop down will populate showing your added VM
    Now click The button to "Continue to License Management"
        You do not need to do anything on this page
    Click the button to "Continue to Configuration Settings"
    On The Configuration Settings Page the only action you need to do is Create and Confirm your defined password for the deployment.
    There is a toggle switch that allows your to Show Password Consstraints.
    Once you have defined your password you can click the button to the bottom of the page that says "Continue to Review."
    Now take a moment to Review your Deployment selections, once complete, click "Start Provisioning Deployment."
    Select Accept on the EULA Agreement to begin.