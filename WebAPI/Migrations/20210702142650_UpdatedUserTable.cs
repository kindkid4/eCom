using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class UpdatedUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Judet",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Mobile",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Numar",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Oras",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Pfp",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Strada",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tara",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Judet",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Mobile",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Numar",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Oras",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Pfp",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Strada",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Tara",
                table: "Users");
        }
    }
}
