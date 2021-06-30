using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class UpdatedProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_CategoryType_CategoryTypeId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Descriptions_DescriptionId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "CategoryType");

             migrationBuilder.DropColumn(
                name: "Name",
                table: "Products");
                
            migrationBuilder.DropTable(
                name: "Descriptions");

            migrationBuilder.DropIndex(
                name: "IX_Products_CategoryTypeId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_DescriptionId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CategoryTypeId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "DescriptionId",
                table: "Products");

            migrationBuilder.AddColumn<string>(
                name: "CategoryType",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryType",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Products");

            migrationBuilder.AddColumn<int>(
                name: "CategoryTypeId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DescriptionId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CategoryType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastUpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdatedby = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Descriptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastUpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastUpdatedby = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Descriptions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryTypeId",
                table: "Products",
                column: "CategoryTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_DescriptionId",
                table: "Products",
                column: "DescriptionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_CategoryType_CategoryTypeId",
                table: "Products",
                column: "CategoryTypeId",
                principalTable: "CategoryType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Descriptions_DescriptionId",
                table: "Products",
                column: "DescriptionId",
                principalTable: "Descriptions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
