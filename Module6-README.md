# Module 6: Beyond Ansible and Git 
# Turbo Rook Provisioning Engine Ansible Role Deployment
### Accessing the Local Roles Folder

On the Turbo Rook Provisioning Laptop:

1. Open a terminal.
2. Navigate to the local roles directory:

   cd /opt/rook-provisioner/local/roles

   Note: Local roles will override the roles used by Rook Engine by default. This is where we would add custom roles, however we have already added the `cyberfox.opencti` role to the Rook Engine.
   **your Credentials are as follows in the image below**

   ![creds](http://cyberfox:8080/img/openCTI/creds.png)

### Adding your Role to the TURBO ROOK UI

Now return to the web browser with Turbo Rook open

Add "/Admin" to the end of the URL

   This opens Turbo Rook's Admin page

![Turbo Rook Admin Tab](http://cyberfox:8080/img/openCTI/2.%20TR%20admin%20tab.png)

On the left sidebar, click on `Software` to open up a drop down menu.

   Select `Roles`

![Turbo Rook Admin Software Roles](http://cyberfox:8080/img/openCTI/3.%20TR%20admin%20software%20roles.png)

In the upper right side of the screen you will see an `+ Add New` button

![Add New Button](http://cyberfox:8080/img/openCTI/4.%20add%20new%20button.png)

When clicked you will be brought to the `Add Role` screen

![Add Role Page](http://cyberfox:8080/img/openCTI/5.%20add%20role%20page.png)

- **Role Name**: Human-Readable role name (`cyberfox opencti`)
- **Ansible Role Location**: The name of the role as saved on disk (`cyberfox.opencti`)
- **Description**: Write a description of your role

Scroll down. You do not need to enter or adjust any of the following advanced settings:
- Source URL
- Source Tag
- Hypervisor
- Support Level
- Supports commercial software licenses
- Works Offline
- Manage Role Relationships
- Load Role from File

Next, select Valid Systems for your Role:
- For this instance, your role should be set to be valid on both a Server and VM.
- Under the Server column, select the box next to `Rocky 9`.
- Under the VM column, select the box next to `Rocky 9`.

![Valid Systems](http://cyberfox:8080/img/openCTI/6.%20valid%20systems.png)

You do not need to set any System Requirements for this example

You may now scroll to the bottom of the page and click `Save`

![Add Role Save Button](http://cyberfox:8080/img/openCTI/7.%20add%20role%20save%20button.png)

### You are now ready to Provision a device with your newly added role!

On the top bar of TURBO ROOK click on `Launch Deployment`

   For a Deployment Type select `Blank`

![Launch Deployment Blank](http://cyberfox:8080/img/openCTI/8.%20Launch%20Deployment%20Blank.png)

You will be brought to the `Blank Kit` page.

![Blank Kit Page](http://cyberfox:8080/img/openCTI/9.%20blank%20kit%20page.png)

   Look to the right side of the screen for the `+ Add Machine` button

![Blank Kit Add Machine Button](http://cyberfox:8080/img/openCTI/10.%20blank%20kit%20add%20machine%20button.png)

We will now walk through the `Add Hardware` Pop up

![Add Machine Blank Page](http://cyberfox:8080/img/openCTI/11.%20add%20machine%20blank%20page.png)

- **Host Name**: Enter your Host Name `cyberfox-opencti`
- **Select Machine Type**: Click the box and select `Server` from the dropdown

![Add Hardware Machine Type](http://cyberfox:8080/img/openCTI/12.%20add%20hardware%20machine%20type.png)

   **Select Operating System**

      Click the box and select `ESXi 7 (core)` from the dropdown

![Add Hardware ESXi 7](http://cyberfox:8080/img/openCTI/add%20hardware%20esxi7.png)

   Turn on the toggle switch for `Existing` to enable the ability to utilize the existing ESXi networking

![Existing Turned On](http://cyberfox:8080/img/openCTI/existing%20turned%20on.png)

   **Hypervisor IP Address**

      Enter the IP Address of the Server you are going to provision, if you are virtual we have hardcoded the IP address to `172.16.2.2` if you are are at PurpleForge, you can use the ipaddress issued to you by the TurboRook Provisioning Solutiomn.

   **Hypervisor Username**

      Enter the Username for the Existing ESXi:
      root
   **Hypervisor Password**

      Enter the Password for the Existing ESXi:
      M@sterpassword123

![Hypervisor Information](http://cyberfox:8080/img/openCTI/15.%20Hypervisor%20information.png)

   Below the Hypervisor password, click the `Get ESXi Hardware Information` to validate the login credentials and grab the info from ESXi

   The rest of the options below are optional and you do not need to fill them in

   Scroll down and click the toggle to turn off `Run Eclypsium Scan` and `Wipe Disk Partitions before Deploying Operating Systems`

      These are on by default but cannot be run against existing ESXi hypervisors.

![Eclypsium and Wipe Off](http://cyberfox:8080/img/openCTI/17.%20eclypandwipe%20off.png)

   Select `Save`

![Save Button](http://cyberfox:8080/img/openCTI/18.%20save%20button.png)

   Click `Continue to Roles and VMs`

![Server Added Continue Button](http://cyberfox:8080/img/openCTI/19.%20server%20added%20continue%20button.png)

On this screen select `Add New VM` on the left of the screen below your ESXi instance

![Roles and VMs Add New VM](http://cyberfox:8080/img/openCTI/21.%20roles%20and%20vms%20add%20new%20vm.png)

   **Host Name**

      Enter your host name
      cyberfox-opencti-vm
   **Select Operating System**

      Click the box and select `Rocky 9` from the dropdown

   **Virtual Machine Properties**

      The Hypervisor dropdown will already be auto-populated with the `ESXi` already entered

   **Add Additional NICs**
      Choose VM Network from the dropdown

![Add Machine with ESXi](http://cyberfox:8080/img/openCTI/add%20machine%20with%20ESXi.png)

   The remaining options are optional and not needed for this example

   Scroll down to the `Select Roles` section

      Here you will select the box next to the following roles:

         `Docker (core)`

         `Cyberfox Opencti`

![Roles Selected](http://cyberfox:8080/img/openCTI/roles%20selected.png)

   When completed, click `Save`

![Add Machine VM and Save](http://cyberfox:8080/img/openCTI/22.%20add%20machine%20vm%20and%20save.png)

You can now click on the ESXi machine and a dropdown will populate showing your added VM

![Roles and VM Server and VM](http://cyberfox:8080/img/openCTI/23.%20rolesandvm%20server%20and%20vm.png)

Now click the button to `Continue to License Management`

![Continue to License Management](http://cyberfox:8080/img/openCTI/24.%20Continue%20to%20License%20Management.png)

You do not need to do anything on this page

Click the button to `Continue to Configuration Settings`

![Continue to Configuration Settings](http://cyberfox:8080/img/openCTI/26.%20continue%20to%20configuration%20settings.png)

On the `Configuration Settings` Create and Confirm your defined password for the deployment.

   There is a toggle switch that allows you to `Show Password Constraints`.

![Password](http://cyberfox:8080/img/openCTI/PASSWORD.png)

Set the `Amount of RAM` to `8` and the `HDD Capacity` to 100

Once you have defined your parameters you can click the button to the bottom of the page that says `Continue to Review.`

![Continue to Review](http://cyberfox:8080/img/openCTI/28.%20continue%20to%20review.png)

Now take a moment to Review your Deployment selections, once complete, click `Start Provisioning Deployment.`

![Start Provisioning Deployment](http://cyberfox:8080/img/openCTI/30.%20Start%20Provisioning%20Deployment.png)

Select `Accept` on the EULA Agreement to begin.

![EULA](http://cyberfox:8080/img/openCTI/31.%20EULA.png)

You will be brought to the `Build Progress` page where you can monitor the progress of your deployment.

![Provisioning](http://cyberfox:8080/img/openCTI/32.%20provisioning.png)

Whenyou are finished with the deployment you will be given a `Finished Deployment` screen with an IP Address to access your newly provisioned openCTI instance.
![finisheddeployment](http://cyberfox:8080/img/openCTI/finisheddeployment.png)

go to the IP address and you will be greeted with the openCTI login screen
![loginscreen](http://cyberfox:8080/img/openCTI/loginscreen.png)

You have now successfully provisioned a device with your newly added role! 
```