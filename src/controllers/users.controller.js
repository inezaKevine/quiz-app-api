import { UserService } from "../services/users.service";

export class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async getAllUsers(req, res) {
        const users = await this.userService.getAllUsers();
        res.status(200).json({
            statusCode: 200,
            message: "All users retrieved successfully",
            payload: users,
        });
    }

    async updateUserStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedUser = await this.userService.updateUser(id, { status });

            if (!updatedUser)
                res.status(404).json({
                    statusCode: 404,
                    message: "User not found",
                });


            res.status(200).json({
                statusCode: 200,
                message: "User status updated successfully",
                payload: updatedUser,
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
